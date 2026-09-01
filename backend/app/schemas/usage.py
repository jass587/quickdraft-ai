from pydantic import BaseModel


class UsageResponse(BaseModel):
    monthly_credits: int
    credits_used: int
    credits_remaining: int