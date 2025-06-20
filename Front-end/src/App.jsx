// ForWize/Front-end/src/App.jsx (ou App.js)
import React, { useEffect, useState } from 'react'; // <--- IMPORTAR ESTES
import { BrowserRouter } from 'react-router-dom';
import './styles/LandingPage.css';
import AppRoutes from './Routes/AppRoutes';

function App() {
  const [backendMessage, setBackendMessage] = useState('Conectando ao backend...'); // <--- ESTADO
  
  useEffect(() => { // <--- EFEITO PARA FAZER A CHAMADA
    fetch('/api/pinga')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBackendMessage(data.message);
        console.log('Mensagem do Backend:', data.message);
      })
      .catch(error => {
        setBackendMessage(`Erro na conexão: ${error.message}`);
        console.error('Erro ao buscar do backend:', error);
      });
  }, []); 

  return (
    <BrowserRouter>
      {/* <h1>Frontend React</h1> 
      <p>{backendMessage}</p> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;