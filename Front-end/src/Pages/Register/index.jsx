// ForWize/Front-end/src/Pages/Register/index.jsx

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importe Link para navegação
import useForm from "../../hooks/useForms.js"; // Seu hook customizado
import InputField from "../../components/InputField.jsx"; // Componente de Input padrão
import MaskedInputField from "../../components/MaskedInputField.jsx"; // Componente de Input mascarado
import Menu2 from '../../components/Menu2'; // Seu componente de Menu2
import "../Register/Register.css"; // CSS específico para esta página

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); // Estado para exibir mensagens de sucesso/erro

  // Estado inicial do formulário (padronizando para 'password' e 'confirmPassword')
  const initialFormValues = {
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    password: "", // Senha
    confirmPassword: "", // Confirmação da senha
    aceitarTermos: false,
  };

  // Usando seu hook useForm, com um callback de handleSubmit assíncrono
  const { values, handleChange, handleSubmit } = useForm(
    initialFormValues,
    async (formData) => { // formData contém os valores do formulário
      setMessage(''); // Limpa mensagens anteriores

      // 1. Validação básica no Frontend (confirmação de senha)
      if (formData.password !== formData.confirmPassword) {
        setMessage("As senhas não coincidem.");
        return; // Para a submissão se as senhas não forem iguais
      }

      if (!formData.aceitarTermos) {
          setMessage("Você deve aceitar os termos de uso.");
          return;
      }
      
      try {
        // 2. Requisição para a API de Registro do Backend
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            cpf: formData.cpf,
            password: formData.password, // Envia a senha (não 'senha' nem 'confirmacao')
            // aceitarTermos não é enviado para o backend geralmente, tratado no frontend
          }),
        });

        const data = await response.json(); // Converte a resposta para JSON

        // 3. Lógica de Sucesso/Erro da Requisição
        if (response.ok) { // Status 2xx (ex: 201 Created)
          console.log("Registro bem-sucedido:", data);
          setMessage(data.message || "Cadastro realizado com sucesso!");
          navigate("/login"); // Redireciona para a página de login após o sucesso
        } else { // Status 4xx ou 5xx (erro)
          console.error("Erro no registro:", data);
          setMessage(data.message || "Erro ao cadastrar. Tente novamente.");
        }
      } catch (error) { // Erros de rede, servidor offline, etc.
        console.error("Erro de conexão ou requisição:", error);
        setMessage("Não foi possível conectar ao servidor. Verifique sua conexão.");
      }
    }
  );

  return (
    <>
      <Menu2 />
      <div className="register-container">
        <h2 className="form-title">Crie sua conta</h2>

        <form onSubmit={handleSubmit}> {/* Usa o handleSubmit do useForm */}
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
            // Para MaskedInputField, o onChange pode precisar pegar o valor sem máscara se 'handleChange' não o faz
            onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.value }})}
            placeholder="(00) 00000-0000"
            mask="(00) 00000-0000"
          />
          <MaskedInputField
            label="CPF"
            name="cpf"
            value={values.cpf}
            // Adapte onChange para MaskedInputField se o valor retornado não for o esperado (string simples)
            onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.value }})}
            placeholder="000.000.000-00"
            mask="000.000.000-00"
          />
          <InputField // Mudei para InputField padrão para senhas
            label="Senha"
            type="password"
            name="password" // Nome do campo padronizado para 'password'
            value={values.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
          <InputField // Mudei para InputField padrão para senhas
            label="Confirme a Senha"
            type="password"
            name="confirmPassword" // Nome do campo padronizado para 'confirmPassword'
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Repita a senha"
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
              Eu aceito os <Link to="/termos">termos de uso</Link> {/* Usando Link */}
            </label>
          </div>

          {message && <p style={{ color: message.includes("sucesso") || message.includes("cadastrado") ? "green" : "red", textAlign: "center" }}>{message}</p>}

          <button type="submit" className="register-button">
            Registrar
          </button>
        </form>

        <p className="signup-prompt">
          Já tem uma conta?{" "}
          <Link to="/login" className="signup-link"> {/* Usando Link */}
            Faça o login.
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;