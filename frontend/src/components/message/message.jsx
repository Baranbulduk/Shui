import React, { useState, useEffect } from 'react';
import './message.css';

function MessageComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://3wdwn7v146.execute-api.eu-north-1.amazonaws.com/admin/message');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

  return (
    <>
     <div className='post'>
        {data.map((item, index) => (
        <div key={index} className="anslag">
          <h3 className='username'>{item.username}</h3>
          <p className='message'>{item.message}</p>
        </div>
        ))}
      </div>
    </>
  );
}

export default MessageComponent;