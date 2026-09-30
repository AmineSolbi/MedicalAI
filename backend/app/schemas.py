from pydantic import BaseModel
import uuid

class UserCreate(BaseModel):
    name: str
    phone_number: str
    
class ContactCreate(BaseModel):
    name: str
    phone_number: str
    user_id: uuid.UUID