from pydantic import BaseModel, ConfigDict, Field

from app.schemas.tone import Tone


class RewriteRequest(BaseModel):
    model_config = ConfigDict(
        str_strip_whitespace=True,
    )

    email: str = Field(
        ...,
        min_length=10,
        max_length=10000,
        description="Email to rewrite",
    )

    tone: Tone = Field(
        ...,
        description="Desired tone",
    )

class RewriteResponse(BaseModel):
    rewritten_email: str = Field(
        ...,
        description="AI rewritten email",
        examples=[
            "Dear John,\n\nUnfortunately, I won't be able to attend tomorrow's meeting as I am feeling unwell. I appreciate your understanding.\n\nBest regards,"
        ],
    )