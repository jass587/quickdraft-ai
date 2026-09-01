from datetime import datetime, timedelta, timezone
from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import CreditAccount


FREE_MONTHLY_CREDITS = 10


class CreditService:

    def create_free_credit_account(
        self,
        db: Session,
        user_id: UUID,
    ) -> CreditAccount:
        existing_account = db.scalar(
            select(CreditAccount).where(
                CreditAccount.user_id == user_id
            )
        )

        if existing_account:
            return existing_account

        now = datetime.now(timezone.utc)

        # Start of the current month
        period_start = now.replace(
            day=1,
            hour=0,
            minute=0,
            second=0,
            microsecond=0,
        )

        # First moment of next month
        if period_start.month == 12:
            next_month = period_start.replace(
                year=period_start.year + 1,
                month=1,
            )
        else:
            next_month = period_start.replace(
                month=period_start.month + 1,
            )

        period_end = next_month - timedelta(microseconds=1)

        account = CreditAccount(
            user_id=user_id,
            monthly_credits=FREE_MONTHLY_CREDITS,
            credits_used=0,
            period_start=period_start,
            period_end=period_end,
        )

        db.add(account)
        db.commit()
        db.refresh(account)

        return account

    def get_credit_account(
        self,
        db: Session,
        user_id: UUID,
    ) -> CreditAccount | None:
        return db.scalar(
            select(CreditAccount).where(
                CreditAccount.user_id == user_id
            )
        )


    def has_available_credit(
        self,
        db: Session,
        user_id: UUID,
    ) -> bool:
        account = self.get_credit_account(
            db=db,
            user_id=user_id,
        )

        if account is None:
            return False

        return account.credits_used < account.monthly_credits
    
    def consume_credit(
        self,
        db: Session,
        user_id: UUID,
    ) -> CreditAccount:
        account = self.get_credit_account(
            db=db,
            user_id=user_id,
        )

        if account is None:
            raise ValueError("Credit account not found")

        if account.credits_used >= account.monthly_credits:
            raise ValueError("No credits remaining")

        account.credits_used += 1

        db.commit()
        db.refresh(account)

        return account
    
    def get_credit_summary(
        self,
        db: Session,
        user_id: UUID,
    ) -> dict[str, int]:
        account = self.get_credit_account(
            db=db,
            user_id=user_id,
        )

        if account is None:
            raise ValueError("Credit account not found")

        credits_remaining = (
            account.monthly_credits - account.credits_used
        )

        return {
            "monthly_credits": account.monthly_credits,
            "credits_used": account.credits_used,
            "credits_remaining": credits_remaining,
        }


credit_service = CreditService()