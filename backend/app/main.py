from fastapi import FastAPI

from app.core.config import settings
from app.core.openai_client import client

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)


@app.get("/")
def root():
    return {
        "message": settings.app_name,
        "version": settings.app_version,
        "client_initialized": client is not None,
    }