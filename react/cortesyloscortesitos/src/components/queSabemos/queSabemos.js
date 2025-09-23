import React, { useState } from "react";
import "./queSabemos.css";

export default function FormularioHabilidades() {
  const initialForm = {
    nombre: "",
    competencias_tecnicas: {
      "ERP/Odoo": { fortalezas: "", necesidades: "" },
      "Docker/Contenedores": { fortalezas: "", necesidades: "" },
      "Base de datos (Postgres)": { fortalezas: "", necesidades: "" },
      "Integraciones (Java/Otros)": { fortalezas: "", necesidades: "" },
      "Gestión del proyecto": { fortalezas: "", necesidades: "" },
      "Infraestructura/DevOps": { fortalezas: "", necesidades: "" },
    },
    competencias_transversales: {
      "Comunicación oral": { fortalezas: "", necesidades: "" },
      "Comunicación escrita": { fortalezas: "", necesidades: "" },
      "Trabajo en equipo": { fortalezas: "", necesidades: "" },
      "Competencia personal": { fortalezas: "", necesidades: "" },
    },
  };

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (e, categoria, campo) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [categoria]: {
        ...formData[categoria],
        [name]: {
          ...formData[categoria][name],
          [campo]: value,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:8000/api/habilidades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar los datos");

      setStatus("Datos enviados correctamente ✅");
      setFormData(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("Hubo un problema al enviar ❌");
    }
  };

  const nombres = ["Ander", "Iker", "Daniel", "Julen", "Lander"];

  return (
    <div className="form-container">
      <h1>Formulario de Habilidades</h1>
      <form onSubmit={handleSubmit}>
        {/* Selector de nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <select
            name="nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
          >
            <option value="" disabled>Selecciona un nombre</option>
            {nombres.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Competencias técnicas */}
        <div className="form-section">
          <h2>Competencias Técnicas</h2>
          {Object.keys(formData.competencias_tecnicas).map((c) => (
            <div key={c} className="competencia-block">
              <h3>{c}</h3>
              <label>Qué sé (fortalezas)</label>
              <textarea
                name={c}
                value={formData.competencias_tecnicas[c].fortalezas}
                onChange={(e) => handleChange(e, "competencias_tecnicas", "fortalezas")}
                placeholder="Fortalezas..."
                required
              />
              <label>Qué necesito aprender</label>
              <textarea
                name={c}
                value={formData.competencias_tecnicas[c].necesidades}
                onChange={(e) => handleChange(e, "competencias_tecnicas", "necesidades")}
                placeholder="Necesidades..."
                required
              />
            </div>
          ))}
        </div>

        {/* Competencias transversales */}
        <div className="form-section">
          <h2>Competencias Transversales</h2>
          {Object.keys(formData.competencias_transversales).map((c) => (
            <div key={c} className="competencia-block">
              <h3>{c}</h3>
              <label>Qué sé (fortalezas)</label>
              <textarea
                name={c}
                value={formData.competencias_transversales[c].fortalezas}
                onChange={(e) => handleChange(e, "competencias_transversales", "fortalezas")}
                placeholder="Fortalezas..."
                required
              />
              <label>Qué necesito aprender</label>
              <textarea
                name={c}
                value={formData.competencias_transversales[c].necesidades}
                onChange={(e) => handleChange(e, "competencias_transversales", "necesidades")}
                placeholder="Necesidades..."
                required
              />
            </div>
          ))}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </div>
  );
}
