import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la libreria corretta
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n/i18n'; // Importa la configurazione di i18next

// Crea il root e monta l'app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
