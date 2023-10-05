from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options as ChromeOptions


def get_local_chrome_driver():
    options = ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--headless=new')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    options.add_argument('--window-size=1920, 1080')
    options.add_argument("--log-level=OFF")
    options.add_experimental_option('excludeSwitches', ['enable-logging'])

    return webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

def get_remote_chrome_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-ssl-errors=yes')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--headless')
    options.add_argument('--headless=new')
    options.add_argument('--no-sandbox')
    options.add_argument('--window-size=1920, 1080')

    driver = webdriver.Remote(
        command_executor='http://selenium-hub:4444/wd/hub',
        options=options
    )

    return driver