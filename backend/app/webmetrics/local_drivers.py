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