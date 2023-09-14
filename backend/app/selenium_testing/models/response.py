from pydantic import BaseModel

class BaseResponse(BaseModel):
    url: str
    status: str

class Response(BaseResponse):
    num_images: int
    num_images_no_alt: int
    favicon: str
    title: str
    meta_description: str
    og_url: str
    og_type: str
    og_title: str
    og_description: str
    og_image: str
    twitter_card: str
    twitter_domain: str
    twitter_url: str
    twitter_title: str
    twitter_description: str
    twitter_image: str

