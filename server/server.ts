//empezar websocket
import { WebSocketServer } from "ws";
const port = 5000;
const wss = new WebSocketServer({ port });

//on detecta la conexion recibiendo el websocket
wss.on('connection', (ws) => {

    ws.send(`Enviando desde el server los datos:`)

    
    ws.on('message', (data) => {
        console.log(`Recibiendo desde el cliente ${data}`)
    });

})
  
console.log(`listening port ${port}`)