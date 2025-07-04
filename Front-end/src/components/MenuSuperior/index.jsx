import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../MenuSuperior/Menusuperior.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // alterna entre abrir e fechar
  };

  const irParaLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className="menu-topo">
        <button className="botao-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <button className="login-btn" onClick={irParaLogin}>Login</button>
      </header>

      <nav className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#sobre" onClick={toggleSidebar}>Sobre a ForWize</a></li>
          <li><a href="#servicos" onClick={toggleSidebar}>Nossos Serviços</a></li>
          <li><a href="#portfolio" onClick={toggleSidebar}>Nosso Trabalho</a></li>
          <li><a href="#contato" onClick={toggleSidebar}>Contato</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
