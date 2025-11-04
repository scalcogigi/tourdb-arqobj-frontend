import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="header-logo" onClick={() => navigate("/banda")}>
        TourDB
      </h1>

      <nav className="header-nav">
        <button onClick={() => navigate("/banda")}>Bandas</button>
        <button onClick={() => navigate("/membros")}>Membros</button>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </nav>
    </header>
  );
}
