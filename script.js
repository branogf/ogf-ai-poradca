document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  const messagesContainer = document.getElementById('chat-messages');

  // Správa používateľa
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = "Ty: " + message;
  messagesContainer.appendChild(userMessage);

  // Simulovaná odpoveď bota
  const botReply = document.createElement('div');
  botReply.classList.add('bot-message');
  botReply.textContent = "Poradca OGF: " + message;
  messagesContainer.appendChild(botReply);

  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
