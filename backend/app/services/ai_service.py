from app.core.config import settings
from app.core.openai_client import client


class AIService:
    """Service responsible for interacting with the OpenAI API."""

    @staticmethod
    def rewrite_email(system_prompt: str, user_prompt: str) -> str:
        response = client.responses.create(
            model=settings.openai_model,
            instructions=system_prompt,
            input=user_prompt,
        )

        return response.output_text.strip()