from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import User
from app.services.password_service import hash_password, verify_password


class AuthenticationService:

    def register_user(
        self,
        db: Session,
        email: str,
        password: str,
    ) -> User:
        existing_user = db.scalar(
            select(User).where(User.email == email)
        )

        if existing_user:
            raise ValueError("User with this email already exists")

        user = User(
            email=email,
            password_hash=hash_password(password),
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    def authenticate_user(
        self,
        db: Session,
        email: str,
        password: str,
    ) -> User | None:
        user = db.scalar(
            select(User).where(User.email == email)
        )

        if not user:
            return None

        if not user.is_active:
            return None

        if not verify_password(password, user.password_hash):
            return None

        return user


auth_service = AuthenticationService()