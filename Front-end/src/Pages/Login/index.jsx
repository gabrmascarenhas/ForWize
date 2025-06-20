// ForWize/Front-end/src/Pages/Login/index.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Link é para navegação interna
import SocialLogin from "../../components/SocialLogin.jsx";
import InputField from "../../components/InputField.jsx"; // Assumindo que você usa este componente
import Menu2 from '../../components/Menu2'; // Assumindo que você usa este componente
import "./Login.css"; // Assumindo que Login.css existe aqui

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Estado para a senha
  const [message, setMessage] = useState(""); // Para mensagens de feedback
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // IMPEDE o comportamento padrão de recarregar a página
    setMessage(""); // Limpa mensagens anteriores

    try {
      // Faz a requisição POST para a rota de login do backend
      const response = await fetch("/api/auth/login", { // Rota '/api/auth/login'
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Importante para informar que o corpo é JSON
        },
        body: JSON.stringify({ email, password }), // Envia email e password (convertidos para JSON)
      });

      const data = await response.json(); // Converte a resposta do backend para JSON

      if (response.ok) { // Se o status HTTP for 2xx (ex: 200 OK)
        console.log("Login bem-sucedido!", data);
        setMessage(data.message); // Exibe a mensagem de sucesso do backend
        localStorage.setItem("token", data.token); // ARMAZENA O TOKEN JWT NO LOCAL STORAGE
        navigate("/profile"); // Redireciona para a página de perfil
      } else { // Se o status HTTP for 4xx ou 5xx (erro)
        console.error("Falha no login:", data);
        setMessage(data.message || "Erro desconhecido. Verifique suas credenciais.");
      }
    } catch (error) { // Erros de rede, servidor offline, etc.
      console.error("Erro de conexão ou requisição:", error);
      setMessage("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <Menu2 />
      <div className="login-container">
        <h2 className="form-title">Login com</h2>
        <SocialLogin />

        <p className="separator"><span>ou</span></p>

        <form onSubmit={handleSubmit} className="login-form"> {/* CONECTA O SUBMIT */}
          <InputField
            type="email"
            placeholder="Endereço de Email"
            icon="mail"
            value={email} // Conecta ao estado 'email'
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
          />
          <InputField
            type="password"
            placeholder="Senha"
            icon="lock"
            value={password} // Conecta ao estado 'password'
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
          />

          <Link to="/recover-password" className="forgot-password-link">Esqueceu a senha?</Link>

          {/* O botão agora é type="submit" e o form tem onSubmit={handleSubmit} */}
          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="signup-prompt">
          Não tem uma conta? <Link to="/register" className="signup-link">Cadastre-se</Link> {/* Usando Link para navegação */}
        </p>
        {message && <p style={{ color: message.includes("sucesso") ? "green" : "red", textAlign: "center" }}>{message}</p>}
      </div>
    </>
  );
};

export default Login;