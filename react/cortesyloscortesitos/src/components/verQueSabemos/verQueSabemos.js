import React, { useEffect, useState } from "react";
import "./verQueSabemos.css";

export default function VerHabilidades() {
  const [datos, setDatos] = useState(null);
  const [integrante, setIntegrante] = useState("Ander");
  const nombres = ["Ander", "Iker", "Daniel", "Julen", "Lander"];

  // Fetch datos del backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/datos");
        const result = await response.json();
        setDatos(result.datos); 
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  if (!datos) return <p>Cargando datos...</p>;
  if (!datos.habilidades || !datos.habilidades[integrante]) {
    return <p>No hay datos de habilidades para {integrante}</p>;
  }

  const data = datos.habilidades[integrante];

  return (
    <div className="form-container">
      <h1>Habilidades del equipo</h1>

      {/* Selector de integrante */}
      <div className="form-group">
        <label>Selecciona integrante</label>
        <select value={integrante} onChange={(e) => setIntegrante(e.target.value)}>
          {nombres.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Competencias técnicas */}
      <div className="form-section">
        <h2>Competencias Técnicas</h2>
        {Object.keys(data.competencias_tecnicas).map((c) => (
          <div key={c} className="competencia-block">
            <h3>{c}</h3>
            <p><strong>Qué sé (fortalezas):</strong> {data.competencias_tecnicas[c].fortalezas || "—"}</p>
            <p><strong>Qué necesito aprender:</strong> {data.competencias_tecnicas[c].necesidades || "—"}</p>
          </div>
        ))}
      </div>

      {/* Competencias transversales */}
      <div className="form-section">
        <h2>Competencias Transversales</h2>
        {Object.keys(data.competencias_transversales).map((c) => (
          <div key={c} className="competencia-block">
            <h3>{c}</h3>
            <p><strong>Qué sé (fortalezas):</strong> {data.competencias_transversales[c].fortalezas || "—"}</p>
            <p><strong>Qué necesito aprender:</strong> {data.competencias_transversales[c].necesidades || "—"}</p>
          </div>
        ))}
      </div>

      <p className="form-status">
        Última actualización: {datos.fecha_actualizacion}
      </p>
    </div>
  );
}