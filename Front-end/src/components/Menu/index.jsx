import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../MenuSuperior/Menusuperior.css";

const Menu = () => {
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
        <button className="login-btn" onClick={irParaLogin}>Login</button>
      </header>

      <nav className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <ul>
          {/* Para links de âncora (#) que rolam a página e também fecham a sidebar */}
          <li><a href="#sobre" onClick={toggleSidebar}>Sobre a ForWize</a></li>
          <li><a href="#servicos" onClick={toggleSidebar}>Nossos Serviços</a></li>
          <li><a href="#portfolio" onClick={toggleSidebar}>Nosso Trabalho</a></li>
          <li><a href="#contato" onClick={toggleSidebar}>Contato</a></li>
          
          {/* AQUI ESTÁ A CORREÇÃO: Removida a tag <a> externa */}
          <li><Link to="/login" onClick={toggleSidebar}>Perfil</Link></li>
          
          {/* Se você tiver outras Links, como esta, certifique-se de que não há <a> externo: */}
          {/* <li><Link to="/assinaturas" onClick={toggleSidebar}>Assinaturas</Link></li> */}
          
        </ul>
      </nav>
    </>
  );
};

export default Menu;
