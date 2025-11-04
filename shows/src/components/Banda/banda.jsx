import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Banda.css";
import Header from "../Header/header.jsx";

export default function Banda() {
  const [bandas, setBandas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBandas = async () => {
      try {
        const response = await api.get("/banda"); 
        setBandas(response.data);
      } catch (error) {
        console.error("Erro ao buscar bandas:", error);
      }
    };

  fetchBandas();
  }, []);

  const handleGoToMembros = () => {
    navigate("/membros");
  };
  return (
    <>
      <Header />

      <div className="banda-container">
        <div className="banda-box">
          <div className="banda-header">
            <h2>BANDA</h2>
          </div>

          <div className="banda-content">
            {bandas.length > 0 ? (
              bandas.map((banda) => (
                <div key={banda.id} className="banda-info">
                  <div className="banda-imagem"></div>

                  <div className="banda-detalhes">
                    <h3>{banda.nome}</h3>
                    <p
                      className="banda-membros"
                      onClick={handleGoToMembros}
                      style={{ cursor: "pointer", color: "#ff625f" }}
                    >
                      Membros
                    </p>
                  </div>

                  <div className="banda-descricao">
                    <h4>Descrição</h4>
                    <p>{banda.genero || "Sem descrição"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhuma banda cadastrada.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}