
import React, { useState } from "react";
import "../Navbar/Navbar.css";


const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => setMenuAberto(true);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
  <div class="menu-topo">
  <button class="botao-menu" onClick={abrirMenu}>☰</button>
  <a href="#inicio" class="logo-topo">Login</a>
</div>

<nav id="sidebar" className={`sidebar ${menuAberto ? "show" : ""}`}>
  <button className="botao-fechar" onClick={fecharMenu}>✖</button>

    
      </nav>
    </>
  );
};

export default Menu;
