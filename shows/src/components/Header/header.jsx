// src/components/Header/header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") !== null;

  function handleLogin() {
    navigate("/login");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        {/* Título clicável */}
        <h1
          className="header__title"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/homepage")}
        >
          TourDB
        </h1>

        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn btn--outline" onClick={() => navigate("/banda")}>
            Bandas
          </button>
          <button className="btn btn--outline" onClick={() => navigate("/membros")}>
            Membros
          </button>

          {isLoggedIn ? (
            <button className="btn btn--outline" onClick={handleLogout}>
              Sair
            </button>
          ) : (
            <button className="btn btn--outline" onClick={handleLogin}>
              Entrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
