from fastapi import APIRouter, HTTPException
from app.schemas.rewrite import RewriteRequest, RewriteResponse
from app.services.ai_service import AIService
from app.services.prompt_service import PromptService
from app.core.exceptions import AIServiceError

router = APIRouter(prefix="/rewrite", tags=["Rewrite"])


@router.post("", response_model=RewriteResponse)
def rewrite_email(request: RewriteRequest) -> RewriteResponse:
    try:
        system_prompt, user_prompt = PromptService.build_email_rewrite_prompt(
            email=request.email,
            tone=request.tone,
        )

        rewritten_email = AIService.rewrite_email(
            system_prompt=system_prompt,
            user_prompt=user_prompt,
        )

        return RewriteResponse(
            rewritten_email=rewritten_email,
        )
    except AIServiceError as e:
        raise HTTPException(
            status_code=503,
            detail=str(e),
        )