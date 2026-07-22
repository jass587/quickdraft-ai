from app.prompts.email import EMAIL_REWRITE_SYSTEM_PROMPT


class PromptService:
    """Service responsible for building AI prompts."""

    @staticmethod
    def build_email_rewrite_prompt(
        email: str,
        tone: str,
    ) -> tuple[str, str]:
        system_prompt = EMAIL_REWRITE_SYSTEM_PROMPT

        user_prompt = f"""
        Rewrite the following email.

        Requested tone:
        {tone}

        Please improve the writing while preserving the original intent and facts.

        Original email:
        {email}
        """.strip()

        return system_prompt, user_prompt