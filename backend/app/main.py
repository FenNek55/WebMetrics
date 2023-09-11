from models.response import Response
from fastapi import WebSocket
from fastapi import FastAPI

app = FastAPI()

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int, authorized: bool = True):
    await websocket.accept()
    while True:
        if(authorized == False):
            await websocket.close()
            break

        data = await websocket.receive_text()

        url = data.strip() 

        mock_response = Response(
            url=url,
            status_code=200,
            num_images=10,
            num_images_no_alt=2
        )

        await websocket.send_json(mock_response.model_dump())

        await websocket.close()
        break

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)