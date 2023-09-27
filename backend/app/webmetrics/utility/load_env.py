import os
from os.path import join
from dotenv import load_dotenv


def load_env_variables():
    dotenv_path = join(os.getcwd(), '.env')
    load_dotenv(dotenv_path, override=True)

    if not os.getenv('GOOGLE_PAGESPEED_URL'):
        raise Exception('GOOGLE_PAGESPEED_URL is not set')