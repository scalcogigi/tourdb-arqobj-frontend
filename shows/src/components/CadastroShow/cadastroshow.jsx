import React, { useState } from "react";
import FormField from "../FormField.jsx";
import api from "../../services/api";

export default function ShowForm() {
  const [form, setForm] = useState({
    nome: "",
    data: "",
    idLocal: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.idLocal || Number(form.idLocal) <= 0) {
      alert("Informe um ID de Local válido.");
      return;
    }

    const payload = {
      nome: form.nome,
      data: form.data, 
      idLocal: Number(form.idLocal),
    };

    try {
      console.log("Payload enviado:", payload);
      await api.post("/show", payload);
      alert("Show cadastrado com sucesso!");
      setForm({
        nome: "",
        data: "",
        idLocal: "",
      });
    } catch (err) {
      console.error("Erro ao salvar show:", err);
      alert("Erro ao salvar show. Verifique o ID do local e o token.");
    }
  }

  return (
    <main className="panel">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Cadastro de Show</h2>

        <FormField
          label="NOME DO SHOW"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <div className="form__field">
          <label className="form__label">DATA E HORA</label>
          <input
            type="datetime-local"
            name="data"
            value={form.data}
            onChange={handleChange}
            className="form__input"
          />
        </div>

        <FormField
          label="ID DO LOCAL"
          name="idLocal"
          value={form.idLocal}
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
