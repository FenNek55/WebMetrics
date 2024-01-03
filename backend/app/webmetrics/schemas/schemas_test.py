from .response import Response, BaseResponse, ResponseError
import pytest

def test_response_schema_correct():
    test_base_response = BaseResponse(url="https://www.google.com", status="200")

    assert test_base_response.url == "https://www.google.com"
    assert test_base_response.status == "200"

    test_error_response = ResponseError(url="https://www.google.com", status="200", error="Test error")

    assert test_error_response.url == "https://www.google.com"
    assert test_error_response.status == "200"
    assert test_error_response.error == "Test error"

    test_response = Response(
        url="https://www.google.com",
        status="200",
        num_images=1,
        num_images_no_alt=1,
        favicon="https://www.google.com/favicon.ico",
        title="Google",
        meta_description="Test description",
        og_url="https://www.google.com",
        og_type="website",
        og_title="Google",
        og_description="Test description",
        og_image="https://www.google.com/favicon.ico",
        twitter_card="summary",
        twitter_title="Google",
        twitter_description="Test description",
        twitter_image="https://www.google.com/favicon.ico",
        google_pagespeed={
            "field_data": {
                "test": "test"
            },
            "lighthouse_result": {
                "test": "test"
            }
        }
    )

    assert test_response.url == "https://www.google.com"
    assert test_response.status == "200"
    assert test_response.num_images == 1
    assert test_response.num_images_no_alt == 1
    assert test_response.favicon == "https://www.google.com/favicon.ico"
    assert test_response.title == "Google"
    assert test_response.meta_description == "Test description"
    assert test_response.og_url == "https://www.google.com"
    assert test_response.og_type == "website"
    assert test_response.og_title == "Google"
    assert test_response.og_description == "Test description"
    assert test_response.og_image == "https://www.google.com/favicon.ico"
    assert test_response.twitter_card == "summary"
    assert test_response.twitter_title == "Google"
    assert test_response.twitter_description == "Test description"
    assert test_response.twitter_image == "https://www.google.com/favicon.ico"
    assert test_response.google_pagespeed == {
        "field_data": {
            "test": "test"
        },
        "lighthouse_result": {
            "test": "test"
        }
    }

def test_response_schema_incorrect():
    with pytest.raises(Exception):
        test_base_response = BaseResponse(url=1, status=1)

    with pytest.raises(Exception):
        test_error_response = ResponseError(url=1, status=1, error=1)