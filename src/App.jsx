import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/LandingPage.css'; // Keep global styles here if they apply to the whole app
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
      
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

   );
}

export default App;