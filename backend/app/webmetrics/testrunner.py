import time
from selenium import webdriver
from .models.response import Response, BaseResponse
from . import driver_scripts
from .services.google_pagespeed import get_google_pagespeed_results

def get_response_data(driver: webdriver.Remote, url: str):
    return  Response(
        url = url,
        status = 'ok',
        num_images = driver_scripts.get_number_of_images(driver),
        num_images_no_alt = driver_scripts.get_number_of_images_without_alt(driver),
        favicon = driver_scripts.get_favicon(driver),
        title = driver_scripts.get_title(driver),
        meta_description = driver_scripts.get_meta_description(driver),
        og_url = driver_scripts.get_og_url(driver),
        og_type = driver_scripts.get_og_type(driver),
        og_title = driver_scripts.get_og_title(driver),
        og_description = driver_scripts.get_og_description(driver),
        og_image = driver_scripts.get_og_image(driver),
        twitter_card = driver_scripts.get_twitter_card(driver),
        twitter_title = driver_scripts.get_twitter_title(driver),
        twitter_description = driver_scripts.get_twitter_description(driver),
        twitter_image = driver_scripts.get_twitter_image(driver),
        google_pagespeed = get_google_pagespeed_results(url),
    )
    
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
        
        response = get_response_data(self.driver, url)
        
        self.driver.quit()

        return response