import { useState } from "react";
import { Link } from "react-router-dom";
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
        {/* Botão */}
        <button className="login-btn" onClick={irParaLogin}>Home</button>
      </header>

      <nav className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleSidebar}>Sobre a ForWize</a></li>
           <li><a> <Link to="/login" onClick={toggleSidebar}>Perfil</Link></a></li>
     
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
