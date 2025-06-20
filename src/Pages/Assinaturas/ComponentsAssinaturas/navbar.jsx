import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => setMenuAberto(true);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="menu-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
          <button className="botao-menu" onClick={abrirMenu}>
            ☰
          </button>
        </div>
      </nav>

      <div className={`sidebar ${menuAberto ? "show" : ""}`}>
        <button className="botao-fechar" onClick={fecharMenu}>
          ✖
        </button>
        <ul>
          <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
          <li><a href="#sobre" onClick={fecharMenu}>Sobre</a></li>
          <li><a href="#servicos" onClick={fecharMenu}>Serviços</a></li>
          <li><a href="#contato" onClick={fecharMenu}>Contato</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;