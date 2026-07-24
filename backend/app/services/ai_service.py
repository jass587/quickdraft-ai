from openai import (
    APIConnectionError,
    APIStatusError,
    APITimeoutError,
    RateLimitError,
)
from app.core.exceptions import AIServiceError
from app.core.config import settings
from app.core.openai_client import client
from app.core.logging import logger


class AIService:
    """Service responsible for interacting with the OpenAI API."""

    @staticmethod
    def rewrite_email(system_prompt: str, user_prompt: str) -> str:
        try:
            logger.info("Generating rewritten email")

            response = client.responses.create(
                model=settings.openai_model,
                instructions=system_prompt,
                input=user_prompt,
            )

            logger.info("Email rewritten successfully")

            return response.output_text.strip()

        except RateLimitError as e:
            raise AIServiceError(
                "The AI service is currently busy. Please try again shortly."
            ) from e

        except APITimeoutError as e:
            raise AIServiceError(
                "The AI service timed out. Please try again."
            ) from e

        except APIConnectionError as e:
            raise AIServiceError(
                "Unable to connect to the AI service."
            ) from e

        except APIStatusError as e:
            raise AIServiceError(
                "The AI service returned an unexpected error."
            ) from e

        except Exception as e:
            logger.exception("AI service request failed")
            raise AIServiceError(
                "An unexpected error occurred while generating the email."
            ) from e