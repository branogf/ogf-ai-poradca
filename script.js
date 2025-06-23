document.getElementById('chat-form').addEventListener('submit', async function(event) {
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

  // Zavoláme API na serveri
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: message }),
    });

    const data = await response.json();

    const botReply = document.createElement('div');
    botReply.classList.add('bot-message');

    if (data.answer) {
      botReply.textContent = "Poradca OGF: " + data.answer;
    } else {
      botReply.textContent = "Poradca OGF: Prepáč, nemám odpoveď.";
    }
    messagesContainer.appendChild(botReply);

  } catch (error) {
    const botReply = document.createElement('div');
    botReply.classList.add('bot-message');
    botReply.textContent = "Poradca OGF: Chyba pri spracovaní otázky.";
    messagesContainer.appendChild(botReply);
  }

  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
