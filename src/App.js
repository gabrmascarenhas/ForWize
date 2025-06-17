import React from "react";
import { Routes, Route } from "react-router-dom";

import './styles/LandingPage.css';

import Menu from "./components/menu";
import Hero from "./components/hero";
import Sobre from "./components/sobre";
import Servicos from "./components/servicos";
import Trabalhos from "./components/trabalhos";
import Contato from "./components/contato";
import Profile from "./Pages/Profile";

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
            
          </>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;