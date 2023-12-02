//empezar websocket y conectarlo al server
import WebSocket from 'ws';

const port = 5000;
const ws = new WebSocket(`ws://localhost:${port}`)



ws.on('open', () => {
    ws.send(`Cliente enviando:`)
    console.log('Enviando...')
})

ws.on('message', (data) => {
    console.log(`Recibiendo desde el server los datos: ${data}`)
})

