import React, { useState } from "react";
import FormField from "../FormField.jsx";
import api from "../../services/api";

export default function MemberForm() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    ocupacao: "",
    idBanda: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      nome: form.nome,
      cpf: form.cpf,
      ocupacao: form.ocupacao,
      idBanda: Number(form.idBanda),
    };

    try {
      console.log("Payload enviado:", payload);
      await api.post("/membro", payload);
      alert("Membro cadastrado com sucesso!");
      setForm({
        nome: "",
        cpf: "",
        ocupacao: "",
        idBanda: "",
      });
    } catch (err) {
      console.error("Erro ao salvar membro:", err);
      alert("Não foi possível salvar o cadastro. Verifique a API.");
    }
  }

  return (
    <main className="panel">
      <form className="form" onSubmit={handleSubmit}>
        <FormField
          label="NOME"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <FormField
          label="CPF"
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
        />

        <FormField
          label="OCUPAÇÃO"
          name="ocupacao"
          value={form.ocupacao}
          onChange={handleChange}
        />

        <FormField
          label="ID DA BANDA"
          name="idBanda"
          value={form.idBanda}
          onChange={handleChange}
        />

        <div className="form__actions">
          <button type="submit" className="btn btn--primary">
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}
