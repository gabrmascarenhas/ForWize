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

  const irParaHome = () => {
    navigate("/");
  };

  return (
    <>
      <header className="menu-topo">
        <button className="botao-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <button className="login-btn" onClick={irParaHome}>Home</button>
      </header>

      <nav className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <ul>
         
          <li>
            <Link to="/" onClick={toggleSidebar}>Início</Link>
          </li>
         
          <li>
            <Link to="/profile" onClick={toggleSidebar}>Perfil</Link>
          </li>
       
        </ul>
      </nav>
    </>
  );
};

export default Navbar;