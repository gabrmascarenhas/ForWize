import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './styles/LandingPage.css';

import Menu from "./components/menu";
import Hero from "./components/hero";
import Sobre from "./components/sobre";
import Servicos from "./components/servicos";
import Trabalhos from "./components/trabalhos";
import Contato from "./components/contato";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login/index.jsx";
import Register from "./Pages/Register/Register.jsx";
import RecuperarSenha from "./Pages/Recover/Recover.jsx";


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Sobre />
            <Servicos />
            <Trabalhos />
            <Contato />
            {/* <Login />
            <Register />
            <RecuperarSenha /> */}
            
          </>
        } />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecuperarSenha />} /> */}
      </Routes>
    </>
  );
}

export default App;