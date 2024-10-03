// Conecta ao servidor Socket.IO
const socket = io();

// Seleciona os elementos do DOM
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Quando o formulário é enviado
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Evita o reload da página

  if (input.value) {
    // Envia a mensagem para o servidor
    socket.emit('chat message', input.value);
    input.value = '';  // Limpa o campo de input
  }
});

// Recebe a mensagem e adiciona na lista
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});
