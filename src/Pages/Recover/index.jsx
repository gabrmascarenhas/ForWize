import { useState } from "react";
// import "../../../src/index.css";  // importa os estilos globais se precisar
import "./Recover.css"; // crie esse css ou copie do login
import Menu2 from '../../components/Menu2/index.jsx'; 

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");

  const handleRecuperar = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com o backend depois
    alert(`Se houver uma conta com o e-mail ${email}, enviaremos um link de recuperação.`);
  };

  return (
    <>
    <Menu2 />
    <div className="recover-container">
      <h2 className="form-title">Recuperar Senha</h2>
      <p className="info-text">Informe o e-mail cadastrado para enviarmos um link de recuperação.</p>

      <form onSubmit={handleRecuperar}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="recover-input"
        />
        <button type="submit" className="recover-button">Enviar Link</button>
      </form>

      <p className="signup-prompt">
        Lembrou sua senha? <a href="/login" className="signup-link">Voltar ao login</a>
      </p>
    </div>
    </>
  );
};

export default RecuperarSenha;