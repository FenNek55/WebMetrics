from selenium import webdriver
from .models.response import Response, BaseResponse
from . import driver_scripts
import time
    
class TestRunner:
    def __init__(self, driver: webdriver.Remote) -> None:
        self.driver = driver

class TestRunner:
    def __init__(self, driver: webdriver.Remote) -> None:
        self.driver = driver

    def get_page_test_results(self, url: str):
        try:
            self.driver.get(url)
            time.sleep(1)
        except:
            return BaseResponse(
                url=url,
                status='error',
            )
        
        response =  Response(
            url = url,
            status = 'ok',
            num_images = driver_scripts.get_number_of_images(self.driver),
            num_images_no_alt = driver_scripts.get_number_of_images_without_alt(self.driver),
            favicon = driver_scripts.get_favicon(self.driver),
            title = driver_scripts.get_title(self.driver),
            meta_description = driver_scripts.get_meta_description(self.driver),
            og_url = driver_scripts.get_og_url(self.driver),
            og_type = driver_scripts.get_og_type(self.driver),
            og_title = driver_scripts.get_og_title(self.driver),
            og_description = driver_scripts.get_og_description(self.driver),
            og_image = driver_scripts.get_og_image(self.driver),
            twitter_card = driver_scripts.get_twitter_card(self.driver),
            twitter_domain = driver_scripts.get_twitter_domain(self.driver),
            twitter_url = driver_scripts.get_twitter_url(self.driver),
            twitter_title = driver_scripts.get_twitter_title(self.driver),
            twitter_description = driver_scripts.get_twitter_description(self.driver),
            twitter_image = driver_scripts.get_twitter_image(self.driver),
        )
        
        self.driver.quit()

        return response