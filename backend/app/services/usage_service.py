from datetime import datetime, timezone
from uuid import UUID

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.models import Usage


class UsageService:

    def record_usage(
        self,
        db: Session,
        user_id: UUID,
        action: str,
        credits_used: int = 1,
    ) -> Usage:
        usage = Usage(
            user_id=user_id,
            action=action,
            credits_used=credits_used,
        )

        db.add(usage)
        db.commit()
        db.refresh(usage)

        return usage

    def get_monthly_usage(
        self,
        db: Session,
        user_id: UUID,
        start_date: datetime,
    ) -> int:
        total_usage = db.scalar(
            select(
                func.coalesce(
                    func.sum(Usage.credits_used),
                    0,
                )
            ).where(
                Usage.user_id == user_id,
                Usage.created_at >= start_date,
            )
        )

        return int(total_usage)


usage_service = UsageService()