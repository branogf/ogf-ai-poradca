#chat-container {
  background-color: white; /* biele pozadie */
  border: 1px solid #ccc;
  padding: 10px;
  width: 350px;
  height: 400px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000; /* čierny text */
  overflow: hidden;
}

#chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

#chat-input {
  width: 80%;
  padding: 5px;
}

#chat-form button {
  width: 18%;
  padding: 5px;
  background-color: #3cbf47;
  color: white;
  border: none;
  cursor: pointer;
}

#chat-header {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}
