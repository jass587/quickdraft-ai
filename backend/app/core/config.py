from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "QuickDraft AI"
    app_version: str = "1.0.0"

    openai_api_key: str
    openai_model: str = "gpt-5.5"

    frontend_url: str = "http://localhost:5173"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
    )


settings = Settings()