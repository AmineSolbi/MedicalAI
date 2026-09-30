
import uuid
from fastapi import FastAPI,HTTPException,APIRouter
from app.db import create_db_and_tables
from contextlib import asynccontextmanager
from app.db import create_db_and_tables, SessionLocal
from app.schemas import UserCreate,ContactCreate
from app.models import User,PhoneContact
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from fastapi.middleware.cors import CORSMiddleware




@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_db_and_tables()
    yield
    
app = FastAPI(lifespan=lifespan)
router = APIRouter(prefix="/v1")
origins = [
    "http://localhost",
    "http://localhost:8081",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@router.post("/users", response_model=UserCreate)
async def create_user(user: UserCreate):
    async with SessionLocal() as session:
        try:
            result = await session.execute(select(User).where(User.phone_number == user.phone_number))
            if result.scalar_one_or_none() is not None:
                raise HTTPException(status_code=400,detail="User with this phone number already exists.")
            new_user = User(name=user.name,phone_number=user.phone_number)
            session.add(new_user)
            await session.commit()
            await session.refresh(new_user)
            return new_user

        except HTTPException:
            raise

        except IntegrityError:
            await session.rollback()
            raise HTTPException(status_code=400,detail="Database constraint violated.")

        except Exception:
            await session.rollback()
            raise HTTPException(status_code=500,detail="An unexpected error occurred.")

@router.get("/users")
async def get_users():
    async with SessionLocal() as session:
            result = await session.execute(select(User))
            users = result.scalars().all()
            return users    
        
@router.get("/users/{user_id}")
async def get_user(user_id: uuid.UUID):
    async with SessionLocal() as session:
            result = await session.execute(select(User).where(User.id == user_id))
            user = result.scalar_one_or_none()
            if user is None:
                raise HTTPException(status_code=404, detail="User not found")
            return user 



@router.put("/users/{user_id}", response_model=UserCreate)
async def update_user(user_id: uuid.UUID, user: UserCreate):
    async with SessionLocal() as session:
        try:
            result = await session.execute(select(User).where(User.id == user_id))
            existing_user = result.scalar_one_or_none()
            if existing_user is None:
                raise HTTPException(status_code=404, detail="User not found")
            
            existing_user.name = user.name
            existing_user.phone_number = user.phone_number
            await session.commit()
            await session.refresh(existing_user)
            return existing_user
        except HTTPException:
            raise

        except IntegrityError:
            await session.rollback()
            raise HTTPException(
                status_code=400,
                detail="Invalid data or database constraint violated."
            )

        except Exception:
            await session.rollback()
            raise HTTPException(
                status_code=500,
                detail="An error occurred while updating the user."
            )

@router.delete("/users/{user_id}")
async def delete_user(user_id: uuid.UUID):
    async with SessionLocal() as session:
        try:
            result = await session.execute(select(User).where(User.id == user_id))
            existing_user = result.scalar_one_or_none()
            if existing_user is None:
                raise HTTPException(status_code=404, detail="User not found")
            await session.delete(existing_user)
            await session.commit()  
            return {"detail": "User deleted successfully"}
        except HTTPException:
            raise

        except IntegrityError:
            await session.rollback()
            raise HTTPException(
                status_code=400,
                detail="Invalid data or database constraint violated."
            )

        except Exception:
            await session.rollback()
            raise HTTPException(
                status_code=500,
                detail="An error occurred while updating the user."
            )
            
@router.post("/phone_contacts")
async def create_phone_contact(contact: ContactCreate):
    async with SessionLocal() as session:
        try:
            result = await session.execute(select(User).where(User.id == contact.user_id))
            user = result.scalar_one_or_none()
            if not user:
                raise HTTPException(status_code=404, detail="User not found")
            new_contact = PhoneContact(name=contact.name,phone_number=contact.phone_number,user_id=contact.user_id)
            session.add(new_contact)
            await session.commit()
            await session.refresh(new_contact)
            return new_contact

        except HTTPException:
            raise
        except IntegrityError:
            await session.rollback()
            raise HTTPException(status_code=400,detail="Invalid user_id or database constraint violated.")
        except Exception:
            await session.rollback()
            raise HTTPException(status_code=500, detail="An error occurred while creating the contact.")

app.include_router(router)

        