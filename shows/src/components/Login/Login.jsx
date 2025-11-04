import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Header from "../Header/header.jsx";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

    try {
      const response = await api.post("usuarios/login", {email, password: senha });
      localStorage.setItem("token", response.data);
      navigate("/homepage");
    } catch {
      alert("Email ou senha incorretos!");
    }
};
    function handleLogin(e) {
    e.preventDefault();

    // Valida email/senha aqui, depois:
    localStorage.setItem("token", "usuarioteste123");
    alert("Login realizado com sucesso!");
    navigate("/"); // volta pra home ou dashboard
  }


  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <h2>TourDB</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
            <button type="submit">Entrar</button>
          </form>
          <p onClick={() => navigate("/cadastromembro")} style={{ color: "#ff625f", cursor: "pointer" }}>
            Criar conta
          </p>
        </div>
      </div>
    </>
  );
}