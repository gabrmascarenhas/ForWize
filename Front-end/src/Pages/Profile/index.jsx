import React, { useState } from 'react'; // Importe useState
import './Profile.css';

import Menu2 from '../../components/Menu2'; // Certifique-se que este caminho e o componente são corretos

export default function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a sidebar

  const toggleMenu = () => { // Função para alternar a sidebar
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Menu2 /> 

    
      
  

      {/* Sidebar - Controlada pelo estado isSidebarOpen */}
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`} id="sidebar">
        {/* Você pode adicionar um botão de fechar aqui, se desejar */}
        <button className="botao-fechar" onClick={toggleMenu}>✕</button> 
        <ul className="sidebar-menu">
          <li><a href="#visao-geral" onClick={toggleMenu}>Visão Geral</a></li> {/* Adicionado onClick para fechar ao clicar */}
          <li><a href="#configuracao" onClick={toggleMenu}>Configuração</a></li>
          <li><a href="#pagamento" onClick={toggleMenu}>Pagamento</a></li>
          <li><a href="#assinatura" onClick={toggleMenu}>Assinatura</a></li>
          <li><a href="#historico-de-pagamento" onClick={toggleMenu}>Histórico de Pagamento</a></li>
          <li><a href="#suporte" onClick={toggleMenu}>Suporte</a></li>
          <li><a href="#sair" onClick={toggleMenu}>Sair</a></li>
        </ul>
      </div>

      <div className="container">
        <div className="perfil-header">
          <div className="perfil-info">
            <span className="bem-vindo">Bem-vinda, Cliente!</span>
          </div>
          <div className="perfil-avatar">
            <span>L</span>
          </div>
        </div>

        <div className="perfil-info">
          <div className="info-card">
            <h3>Seu Plano</h3>
            <p><strong>Plano:</strong> ForGrow</p>
            <p><strong>Status:</strong> Ativo</p>
          </div>

          <div className="info-card">
            <h3>Contrato</h3>
            <a href="contrato.pdf" target="_blank">Visualizar Contrato</a>
          </div>

          <div className="info-card">
            <h3>Pagamento</h3>
            <p><strong>Forma:</strong> Cartão</p>
            <p><strong>Próx. vencimento:</strong> 15/06/2025</p>
          </div>
        </div>

        <div className="info-card full">
          <h3>Gerenciador ForWize</h3>
          <iframe title="Gerenciador ForWize" width="100%" height="450" 
            src="https://app.powerbi.com/view?r=LINK-DO-CLIENTE"
            frameBorder="0" allowFullScreen></iframe> 
        </div>
      </div>
    </>
  );
}