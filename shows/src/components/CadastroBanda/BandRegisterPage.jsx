
import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "../Homepage/SectionBar.jsx";
import BandForm from "./BandForm.jsx";

export default function BandRegisterPage() {
  return (
    <div className="page page--centered">
      {/* HEADER sempre no topo */}
      <Header />

      {/* Conteúdo centralizado abaixo do header */}
      <div className="page__content">
        <div className="page__title">CADASTRO BANDA</div>
        <SectionBar title="BANDA" />
        <BandForm />
      </div>
    </div>
  );
}
