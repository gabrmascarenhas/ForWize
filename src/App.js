import React from "react";
import './styles/LandingPage.css';
import Menu from "./components/menu";
import Hero from "./components/hero";
import Sobre from "./components/sobre";
import Servicos from "./components/servicos";
import Trabalhos from "./components/trabalhos";
import Contato from "./components/contato";




function App() {
  return (
    <>
      <Menu />
      <Hero />
      <Sobre />
      <Servicos />
      <Trabalhos />
      <Contato />
    </>
  );
}

export default App;
