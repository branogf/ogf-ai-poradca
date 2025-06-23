document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  const messagesContainer = document.getElementById('chat-messages');

  // Zobraziť správu používateľa
  const userMessage = document.createElement('div');
  userMessage.textContent = "Ty: " + message;
  messagesContainer.appendChild(userMessage);

  // Tu by si pridal volanie na AI backend, ale pre demo len echo
  const botReply = document.createElement('div');
  botReply.textContent = "Poradca OGF: " + message;
  botReply.style.color = '#3cbf47';
  messagesContainer.appendChild(botReply);

  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
