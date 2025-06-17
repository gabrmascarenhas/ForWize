// import SocialLogin from "../../components/SocialLogin.jsx";
// import InputField from "../../components/InputField.jsx";
// import { useState } from "react";
// import "../../../src/index.css";

//  const Login = () => {

//     const [action, setAction] = useState("Login");

//   return (
//     <div className="login-container">
//       <h2 className="form-title">Login com</h2>
//       <SocialLogin />

//       <p className="separator"><span>ou</span></p>

//       <form action="#" className="login-form">
//         <InputField type="email" placeholder="Endereço de Email" icon="mail" />
//         <InputField type="password" placeholder="Senha" icon="lock" />

//         <a href="#" className="forgot-password-link">Esqueceu a senha?</a>
//         <button type="submit" className="login-button">Entrar</button>
//       </form>

//       <p className="signup-prompt">
//         Não tem uma conta? <a href="/register" className="signup-link">Cadastre-se</a>
//       </p>
//     </div>
//   )
// }

// export default Login;

import SocialLogin from "../../components/SocialLogin.jsx";
import InputField from "../../components/InputField.jsx";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Login.css";

const Login = () => {
  // const [action, setAction] = useState("Login"); 

  //define a função para o clique no "Esqueceu a senha?"
  // const esqueceuSenha = () => {
  //   alert("Funcionalidade de recuperação de senha em breve!");
  // };

  return (
    <div className="login-container">
      <h2 className="form-title">Login com</h2>
      <SocialLogin />

      <p className="separator"><span>ou</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Endereço de Email" icon="mail" />
        <InputField type="password" placeholder="Senha" icon="lock" />

        {/*Aqui você usa a função */}
        <Link to="/recover-password" className="forgot-password-link">Esqueceu a senha?</Link>

        <button type="submit" className="login-button">Entrar</button>
      </form>

      <p className="signup-prompt">
        Não tem uma conta? <a href="/register" className="signup-link">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;