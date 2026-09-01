from fastapi import FastAPI

from app.core.config import settings
from app.core.openai_client import client
from fastapi.middleware.cors import CORSMiddleware
from app.api.rewrite import router as rewrite_router
from app.api.auth import router as auth_router
from app.api.usage import router as usage_router

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rewrite_router)
app.include_router(auth_router)
app.include_router(usage_router)

@app.get("/")
def root():
    return {
        "message": settings.app_name,
        "version": settings.app_version
    }