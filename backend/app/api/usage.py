from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models import User
from app.schemas.usage import UsageResponse
from app.services.credit_service import credit_service


router = APIRouter(
    prefix="/usage",
    tags=["Usage"],
)


@router.get(
    "",
    response_model=UsageResponse,
)
def get_usage(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> UsageResponse:
    try:
        summary = credit_service.get_credit_summary(
            db=db,
            user_id=current_user.id,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        ) from exc

    return UsageResponse(**summary)