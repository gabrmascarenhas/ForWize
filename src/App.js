import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './styles/LandingPage.css';

// Assuming these components are in folders with capitalized names (e.g., 'components/Menu/index.jsx')
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Trabalhos from "./components/Trabalhos";
import Contato from "./components/Contato";

// Make sure these imports are UNCOMMENTED and correct for your file structure
import Profile from "./Pages/Profile"; // Check if this also has an 'index.jsx' or 'Profile.jsx'
import Login from "./Pages/Login/index.jsx"; // Assuming 'index.jsx' is the file
import Register from "./Pages/Register/Register.jsx"; // Assuming 'Register.jsx' is the file
import RecuperarSenha from "./Pages/Recover/Recover.jsx"; // Assuming 'Recover.jsx' is the file


function App() {
  return (
    <>
      <Menu />
      <Routes>
        {/* This is your landing page route */}
        <Route path="/" element={
          <>
            <Hero />
            <Sobre />
            <Servicos />
            <Trabalhos />
            <Contato />
          </>
        } />

        {/* Route for Profile page */}
        <Route path="/profile" element={<Profile />} />

        {/* IMPORTANT: Remove the conflicting duplicate '/' route.
            This line <Route path="/" element={<Navigate to="/login" />} />
            is the one that was causing the immediate redirect and hiding your landing page.
            If you want to conditionally redirect (e.g., if user is not logged in),
            that logic needs to be built into a separate component or within the Route definition.
        */}
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

        {/* UNCOMMENT and ensure these routes are active */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecuperarSenha />} />
      </Routes>
    </>
  );
}

export default App;