import React from "react";
// No need for BrowserRouter, Routes, Navigate here. They are in AppRoutes.jsx and Home.jsx (the top-level)

// Adjust paths to go UP two directories to 'src' then down to 'styles'
import '../../styles/LandingPage.css';

// Adjust paths to go UP two directories to 'src' then down to 'components'
import Menu from "../../components/Menu/index.jsx";
import Hero from "../../components/Hero/index.jsx";
import Sobre from "../../components/Sobre/index.jsx";
import Servicos from "../../components/Servicos/index.jsx";
import Trabalhos from "../../components/Trabalhos/index.jsx";
import Contato from "../../components/Contato/index.jsx";

// You don't need to import AppRoutes.jsx here. Home (your top-level) component uses it.


function Home() { // This is the component for your landing page
  return (
    <> {/* This Fragment wraps the landing page content */}
      {/* <Menu />
      <Hero />
      <Sobre />
      <Servicos />
      <Trabalhos />
      <Contato /> */}
      <h1>ok</h1>
    </>
  );
}

export default Home;