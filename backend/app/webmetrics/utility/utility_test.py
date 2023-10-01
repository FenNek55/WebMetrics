from . import validators

def test_url_validation():
    assert validators.validate_url("https://www.google.com") == True
    assert validators.validate_url("http://www.google.com") == True
    assert validators.validate_url("https://google.com") == True
    assert validators.validate_url("http://google.com") == True
    assert validators.validate_url("hts://www.google.com/") == False
    assert validators.validate_url("https://ww/") == False

