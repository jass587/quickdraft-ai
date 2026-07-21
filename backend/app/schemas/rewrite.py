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