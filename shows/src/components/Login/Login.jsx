import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Header from "../Header/header.jsx";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // mock:
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email === "teste@tourdb.com" && senha === "1234") {
  //     navigate("/banda");
  //   } else {
  //     alert("Email ou senha incorretos!");
  //   }
  // };

  const handleSubmit = async (e) => {
      e.preventDefault();

    try {
      const response = await api.post("usuarios/login", {
        email: email,
        password: senha,
      });

      localStorage.setItem("token", response.data);

      navigate("/banda");
    } catch (err) {
      alert("Email ou senha incorretos!");
      console.error(err);
    }
};

  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <label htmlFor="senha">SENHA</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
    </>
  );
}
