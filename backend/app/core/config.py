from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str
    app_version: str

    openai_api_key: str
    openai_model: str

    frontend_url: str

    database_url: str

    jwt_secret_key: str
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 60
    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
    )


settings = Settings()