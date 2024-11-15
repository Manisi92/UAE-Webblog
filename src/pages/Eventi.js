import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Eventi = () => {
  const [eventi, setEventi] = useState([]);

  useEffect(() => {
    axios.get('https://api.eventbriteapi.com/v3/events/search/', {
      params: {
        token: 'YOUR_EVENTBRITE_API_KEY',
        location: 'Emirati Arabi Uniti',
      }
    })
    .then(response => {
      setEventi(response.data.events);
    })
    .catch(error => {
      console.error('Errore nel recupero degli eventi:', error);
    });
  }, []);

  return (
    <div className="eventi">
      <h2>Eventi negli Emirati Arabi Uniti</h2>
      <ul>
        {eventi.map(evento => (
          <li key={evento.id}>
            <h3>{evento.name.text}</h3>
            <p>{evento.description.text}</p>
            <a href={evento.url} target="_blank" rel="noopener noreferrer">Scopri di più</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eventi;