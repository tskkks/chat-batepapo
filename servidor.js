// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve os arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Configuração do Socket.IO
io.on('connection', (socket) => {
  console.log('Um usuário se conectou');

  // Escuta a mensagem do cliente
  socket.on('chat message', (msg) => {
    // Envia a mensagem para todos os clientes conectados
    io.emit('chat message', msg);
  });

  // Quando um usuário se desconectar
  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou');
  });
});

// Iniciar o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
