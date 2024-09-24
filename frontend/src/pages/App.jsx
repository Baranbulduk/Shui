import React from 'react'
import './App.css'

function App() {

  document.getElementById('messageForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const text = document.getElementById('text').value;

    const response = await fetch('/api/postMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, username, text })
    });

    if (response.ok) {
        alert('Meddelandet skickades!');
    } else {
        alert('Ett fel uppstod.');
    }
});

  return (
    <>
      <form id="messageForm">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id" required /><br></br>
        
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required /><br></br>
        
        <label for="text">Text:</label>
        <textarea id="text" name="text" required></textarea><br></br>
        
        <button type="submit">Skicka</button>
      </form>
    </>
  )
}

export default App
