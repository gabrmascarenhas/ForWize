// import InputField from "../../components/InputField.jsx";
// import { useState } from "react";
// import "../Register/Register.css"; // você pode copiar o login.css e adaptar

// const Register = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     email: "",
//     senha: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Aqui você pode fazer a chamada de API para cadastrar
//     console.log("Dados de cadastro:", formData);
//   };

//   return (
//     <div className="register-container">
//       <h2 className="form-title">Crie sua conta</h2>

//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Nome"
//           type="text"
//           name="nome"
//           value={formData.nome}
//           onChange={handleChange}
//           placeholder={"Digite seu nome"}
//         />
//         <InputField
//           label="E-mail"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder={"Digite seu e-mail"}
//         />
//         <InputField
//           label="Senha"
//           type="passwords"
//           name="senha"
//           value={formData.senha}
//           onChange={handleChange}
//           placeholder={"Digite sua senha"}
//         />
//         <button type="submit" className="register-button">
//           Registrar
//         </button>
//       </form>
//       <p className="signup-prompt">
//         Já tem uma conta? <a href="/login" className="signup-link">Faça o login.</a>
//       </p>
//     </div>
//   );
// };

// export default Register;
import Menu2 from '../../components/Menu2'; 
import useForm from "../../hooks/useForms.js";
import { useState } from "react";
import InputField from "../../components/addonsLogin/InputField.jsx";
import MaskedInputField from "../../components/addonsLogin/MaskedInputField.jsx";
import "../Register/Register.css";


const Register = () => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      senha: "",
      confirmacao: "",
      aceitarTermos: false,
    },
    (formData) => {
      console.log("Enviar para API:", formData);
    }
  );

  return (
    <>
    <Menu2 />
    <div className="register-container">
      <h2 className="form-title">Crie sua conta</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome Completo"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
        />
        <InputField
          label="E-mail"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />
        <MaskedInputField
          label="Telefone"
          type="tel"
          name="telefone"
          value={values.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          mask="(00) 00000-0000"
        />
        <MaskedInputField
          label="CPF"
          name="cpf"
          value={values.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
          mask="000.000.000-00"
        />
        <MaskedInputField
          label="Senha"
          type="password"
          name="senha"
          value={values.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
          mask="****************" // apenas visual, a senha será protegida
        />
        <MaskedInputField
          label="Confirme a Senha"
          type="password"
          name="confirmacao"
          value={values.confirmacao}
          onChange={handleChange}
          placeholder="Repita a senha"
          mask="****************"
        />

        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="termos"
            name="aceitarTermos"
            checked={values.aceitarTermos}
            onChange={handleChange}
          />
          <label htmlFor="termos">
            Eu aceito os <a href="/termos">termos de uso</a>
          </label>
        </div>

        <button type="submit" className="register-button">
          Registrar
        </button>
      </form>

      <p className="signup-prompt">
        Já tem uma conta?{" "}
        <a href="/login" className="signup-link">
          Faça o login.
        </a>
      </p>
    </div>
    </>
  );
};

export default Register;
