import React from "react";
import Header from "../Header/header.jsx";
import SectionBar from "../Homepage/SectionBar.jsx";
import MemberForm from "../CadastroMembro/MemberForm.jsx";

export default function MemberRegisterPage() {
  return (
    <div className="page page--centered page--form">
      {/* Header fixo no topo, largura total */}
      <Header />

      {/* Miolo da página de formulário */}
      <div className="page__content">
        <div className="page__title">CADASTRO MEMBRO</div>
        <SectionBar title="MEMBRO" />
        <MemberForm />
      </div>
    </div>
  );
}
