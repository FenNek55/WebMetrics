from selenium import webdriver

js_get_favicon = '''
    var favicon = undefined;
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
        {
            favicon = nodeList[i].getAttribute("href");
        }
    }

    return favicon || '';
'''

def execute_script_exception_handler(script, driver, alternative_value=''):
    try:
        return driver.execute_script(script)
    except:
        return alternative_value
    
    # num_images: int
    # num_images_no_alt: int
    # favicon: str
    # title: str
    # meta_description: str
    # og_url: str
    # og_type: str
    # og_title: str
    # og_description: str
    # og_image: str
    # twitter_card: str
    # twitter_domain: str
    # twitter_url: str
    # twitter_title: str
    # twitter_description: str
    # twitter_image: str

def get_number_of_images(driver: webdriver.Remote):
    return int(execute_script_exception_handler("return document.querySelectorAll('img').length", driver, 0))
    
def get_number_of_images_without_alt(driver):
    return int(execute_script_exception_handler("return document.querySelectorAll('img:not([alt])').length", driver, 0))

def get_favicon(driver):
    return execute_script_exception_handler(js_get_favicon, driver)

def get_title(driver):
    return execute_script_exception_handler("return document.title", driver)

def get_meta_description(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"description\"]').getAttribute('content')", driver)

def get_og_url(driver):
    return execute_script_exception_handler("return document.querySelector('meta[property=\"og:url\"]').getAttribute('content')", driver)

def get_og_type(driver):
    return execute_script_exception_handler("return document.querySelector('meta[property=\"og:type\"]').getAttribute('content')", driver)

def get_og_title(driver):
    return execute_script_exception_handler("return document.querySelector('meta[property=\"og:title\"]').getAttribute('content')", driver)

def get_og_description(driver):
    return execute_script_exception_handler("return document.querySelector('meta[property=\"og:description\"]').getAttribute('content')", driver)

def get_og_image(driver):
    return execute_script_exception_handler("return document.querySelector('meta[property=\"og:image\"]').getAttribute('content')", driver)

def get_twitter_card(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:card\"]').getAttribute('content')", driver)

def get_twitter_domain(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:domain\"]').getAttribute('content')", driver)

def get_twitter_url(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:url\"]').getAttribute('content')", driver)

def get_twitter_title(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:title\"]').getAttribute('content')", driver)

def get_twitter_description(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:description\"]').getAttribute('content')", driver)

def get_twitter_image(driver):
    return execute_script_exception_handler("return document.querySelector('meta[name=\"twitter:image\"]').getAttribute('content')", driver)