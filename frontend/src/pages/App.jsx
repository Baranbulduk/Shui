import './App.css'
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Definiera en asynkron funktion för att hämta data
    const fetchData = async () => {
      try {
        const response = await fetch('https://3wdwn7v146.execute-api.eu-north-1.amazonaws.com/');
        const result = await response.json();
        setData(result); // Uppdatera state med den hämtade datan
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); // Tom array som andra argument gör att detta bara körs en gång när komponenten mountas

  return (
    <>
       <div>
        {data.map((item, index) => (
        <div key={index}>
        <p>{item.message}</p>
        <h3>{item.username}</h3>
        </div>
        ))}
      </div>
    </>
  )
}

export default App
