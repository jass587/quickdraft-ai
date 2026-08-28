from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.exceptions import AIServiceError
from app.core.logging import logger
from app.dependencies.auth import get_current_user
from app.dependencies.database import get_db
from app.models import User
from app.schemas.rewrite import RewriteRequest, RewriteResponse
from app.services.ai_service import AIService
from app.services.credit_service import credit_service
from app.services.prompt_service import PromptService
from app.services.usage_service import usage_service


router = APIRouter(
    prefix="/rewrite",
    tags=["Rewrite"],
)


@router.post("", response_model=RewriteResponse)
def rewrite_email(
    request: RewriteRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> RewriteResponse:

    # Check whether the user has a credit available.
    if not credit_service.has_available_credit(
        db=db,
        user_id=current_user.id,
    ):
        raise HTTPException(
            status_code=402,
            detail="No credits remaining",
        )

    try:
        logger.info(
            "Received rewrite request for user '%s' with tone '%s'",
            current_user.id,
            request.tone,
        )

        system_prompt, user_prompt = PromptService.build_email_rewrite_prompt(
            email=request.email,
            tone=request.tone,
        )

        rewritten_email = AIService.rewrite_email(
            system_prompt=system_prompt,
            user_prompt=user_prompt,
        )

        # Consume one credit only after a successful AI request.
        credit_service.consume_credit(
            db=db,
            user_id=current_user.id,
        )

        # Record successful usage.
        usage_service.record_usage(
            db=db,
            user_id=current_user.id,
            action="rewrite",
            credits_used=1,
        )

        logger.info(
            "Rewrite request completed successfully for user '%s'",
            current_user.id,
        )

        return RewriteResponse(
            rewritten_email=rewritten_email,
        )

    except AIServiceError as e:
        logger.error(
            "Rewrite request failed for user '%s': %s",
            current_user.id,
            str(e),
        )

        raise HTTPException(
            status_code=503,
            detail=str(e),
        ) from e