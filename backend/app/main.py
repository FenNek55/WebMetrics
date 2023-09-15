from fastapi import WebSocket
from fastapi import FastAPI
from webmetrics.testrunner import TestRunner
from webmetrics.models.response import ResponseError
from webmetrics.local_drivers import get_local_chrome_driver
from webmetrics.utility.validators import validate_url

app = FastAPI()

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await websocket.accept()
    testrunner = TestRunner(get_local_chrome_driver())

    while True:
        data = await websocket.receive_text()
        url = data.strip()
        
        if not validate_url(url):
            await websocket.send_json(ResponseError(
                error="Invalid URL",
                url=url,
                status="error",
            ).model_dump())

            await websocket.close()
            break

        response = testrunner.get_page_test_results(url)
        await websocket.send_json(response.model_dump())
        await websocket.close()
        break

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)