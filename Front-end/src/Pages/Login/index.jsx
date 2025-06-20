// import SocialLogin from "../../components/SocialLogin.jsx"; // You uncommented this below
// import InputField from "../../components/InputField.jsx"; // You uncommented this below
// import { useState } from "react"; // You uncommented this below
// import "../../../src/index.css"; // This import path might be wrong for your global CSS.
                                  // Typically, global CSS like index.css is imported in index.js/main.jsx,
                                  // or if it's component-specific, it should be relative like './Login.css'

// IMPORTANT: Do NOT uncomment the top section unless you intend to revert to that code.
// The code you provided is the second (uncommented) block.

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Link is also from react-router-dom

import SocialLogin from "../../components/addonsLogin/SocialLogin.jsx";
import InputField from "../../components/InputField.jsx";
import Menu2 from '../../components/Menu2';
import "./Login.css"; // Assuming you have a Login.css in the same directory, or adjust path accordingly.

const Login = () => {
  // CORRECT PLACE for useNavigate: INSIDE the functional component
  const navigate = useNavigate();

  // You can define a handler function inside the component if it's more complex,
  // or use an arrow function directly in onClick.
  const handleLoginClick = () => {
    navigate("/profile");
  };

  // const [action, setAction] = useState("Login"); // Uncomment if you need this state
  // const esqueceuSenha = () => { // Uncomment if you need this function, though you're using <Link> now
  //   alert("Funcionalidade de recuperação de senha em breve!");
  // };

  return (
    <>
      <Menu2 />
      <div className="login-container">
        <h2 className="form-title">Login com</h2>
        <SocialLogin />

        <p className="separator"><span>ou</span></p>

        <form action="#" className="login-form">
          <InputField type="email" placeholder="Endereço de Email" icon="mail" />
          <InputField type="password" placeholder="Senha" icon="lock" />

          {/* Aqui você usa a função */}
          <Link to="/recover-password" className="forgot-password-link">Esqueceu a senha?</Link>

          {/* Use the defined handler or an inline arrow function */}
          <button type="submit" onClick={handleLoginClick} className="login-button">Entrar</button>
          {/* Or directly: <button type="submit" onClick={() => navigate("/profile")} className="login-button">Entrar</button> */}
        </form>

        <p className="signup-prompt">
          Não tem uma conta? <a href="/register" className="signup-link">Cadastre-se</a>
        </p>

      </div>
    </>
  );
};

export default Login;