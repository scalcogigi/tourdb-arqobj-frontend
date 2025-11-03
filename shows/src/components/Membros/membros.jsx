import React from "react";
import "./Membros.css";

export default function Membros() {
  const membros = [
    { id: 1, nome: "nome" },
    { id: 2, nome: "nome" },
    { id: 3, nome: "nome" },
    { id: 4, nome: "nome" },
  ];

  return (
    <div className="membros-container">
      <h1 className="membros-titulo">MEMBROS</h1>

      <div className="membros-box">
        <div className="membros-header">
          <h2>TourDB</h2>
        </div>

        <div className="membros-grid">
          {membros.map((membro) => (
            <div key={membro.id} className="membro-card">
              <div className="membro-foto"></div>
              <p className="membro-nome">{membro.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
