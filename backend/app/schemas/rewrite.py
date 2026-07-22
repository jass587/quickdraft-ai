from pydantic import BaseModel, Field


class RewriteRequest(BaseModel):
    email: str = Field(
        ...,
        min_length=10,
        max_length=5000,
        description="Original email to rewrite",
        example="Hi John, I can't attend tomorrow's meeting because I'm sick.",
    )

    tone: str = Field(
        ...,
        description="Desired tone",
        example="Professional",
    )

class RewriteResponse(BaseModel):
    rewritten_email: str = Field(
        ...,
        description="AI rewritten email",
        examples=[
            "Dear John,\n\nUnfortunately, I won't be able to attend tomorrow's meeting as I am feeling unwell. I appreciate your understanding.\n\nBest regards,"
        ],
    )