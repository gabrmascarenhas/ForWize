import React from "react";
import './Home.css';
import Menu from "../../components/Menu/index.jsx";
import Hero from "../../components/Hero/index.jsx";
import Sobre from "../../components/Sobre/index.jsx";
import Servicos from "../../components/Servicos/index.jsx";
import Trabalhos from "../../components/Trabalhos/index.jsx";
import Contato from "../../components/Contato/index.jsx";
// import VisaoResultado from "../../components/Visao/index.jsx";



function Home() { 
  return (
    <>
      <Menu />  
      <Hero />
      <Sobre />
      <Servicos />
      <Trabalhos />
      {/* <VisaoResultado /> */}
      <Contato />
     
    </>
  );
}

export default Home;