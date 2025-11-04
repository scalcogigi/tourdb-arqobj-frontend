import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../Header/header.jsx";
import "./Membros.css";

export default function Membros() {
  const [membros, setMembros] = useState([]);

  // mock:
  // useEffect(() => {
  //   const fetchMembros = async () => {
  //     try {
  //       const response = await api.get("/membro"); 
  //       setMembros(response.data);
  //     } catch (error) {
  //       console.error("Erro ao buscar membros:", error);
  //       alert("Não foi possível carregar os membros. Verifique se o backend está rodando.");
  //     }
  //   };

  //   fetchMembros();
  // }, []);

  useEffect(() => {
    const fetchMembros = async () => {
      const fakeData = [
        { id: 1, nome: "Ana", ocupacao: "Vocalista" },
        { id: 2, nome: "João", ocupacao: "Baixista" },
        { id: 3, nome: "Lucas", ocupacao: "Teclado" },
      ];

      setMembros(fakeData);
    };

    fetchMembros();
  }, []);

  return (
    <>
    <Header />
    <div className="membros-container">

      <div className="membros-box">
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
    </>
  );
}
