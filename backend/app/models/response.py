from pydantic import BaseModel

class Response(BaseModel):
    url: str
    status_code: int
    num_images: int
    num_images_no_alt: int