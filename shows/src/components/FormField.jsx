
import React from "react";

export default function FormField({ label, name, value, onChange }) {
  return (
    <label className="form__field">
      <span className="form__label">{label}</span>
      <input
        className="form__input"
        name={name}
        value={value || ""}
        onChange={onChange}
      />
    </label>
  );
}
