import { Link } from "react-router-dom";
import React, { useState } from "react";

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => setMenuAberto(true);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <div className="menu-topo">
        <button className="botao-menu" onClick={abrirMenu}>☰</button>
        <a href="#inicio" className="logo-topo">Para Wize</a>
      </div>

      <nav id="sidebar" className={`sidebar ${menuAberto ? "show" : ""}`}>
        <button className="botao-fechar" onClick={fecharMenu}>✖</button>

        <ul>
          <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
          <li><a href="#sobre-a-forwize" onClick={fecharMenu}>Sobre a ForWize</a></li>
          <li><a href="#o-que-fazemos" onClick={fecharMenu}>O que Fazemos</a></li>
          <li><a href="#nossos-trabalhos" onClick={fecharMenu}>Nossos Trabalhos</a></li>
          <li><a href="#contato" onClick={fecharMenu}>Contato</a></li>
          <li>

            <Link to="/profile" onClick={fecharMenu}>Perfil</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;