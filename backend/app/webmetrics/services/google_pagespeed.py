import os
import requests

def get_google_pagespeed_results(page_url):
    GOOGLE_PAGESPEED_URL = os.getenv('GOOGLE_PAGESPEED_URL')
    GOOGLE_PAGESPEED_API_KEY = os.getenv('GOOGLE_PAGESPEED_API_KEY')

    if not GOOGLE_PAGESPEED_URL:
        raise Exception('GOOGLE_PAGESPEED_URL is not set')
    
    if not GOOGLE_PAGESPEED_API_KEY:
        raise Exception('GOOGLE_PAGESPEED_API_KEY is not set')
    
    response = requests.get(GOOGLE_PAGESPEED_URL, params={
        'key': GOOGLE_PAGESPEED_API_KEY,
        'url': page_url,
        'category': 'performance',
    })

    return response.json()