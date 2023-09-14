from fastapi import WebSocket
from fastapi import FastAPI
from selenium_testing.testrunner import TestRunner
from selenium_testing.local_drivers import get_local_chrome_driver

app = FastAPI()

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await websocket.accept()
    testrunner = TestRunner(get_local_chrome_driver())

    while True:
        data = await websocket.receive_text()
        url = data.strip() 
        #assume that the data is a url

        response = testrunner.get_page_test_results(url)

        await websocket.send_json(response.model_dump())

        await websocket.close()
        break

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)