import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  // Función para descargar el JSON desde el backend
  const handleDownload = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/datos");
      if (!response.ok) throw new Error("Error al descargar datos");
      const result = await response.json();

      // Crear un blob a partir del JSON
      const blob = new Blob(
        [JSON.stringify(result.datos, null, 2)],
        { type: "application/json" }
      );

      // Crear enlace temporal para descarga
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";  // nombre del archivo a descargar
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error en la descarga:", error);
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-item">
          <Link to="/contrato">Firma contrato</Link>
          <Link to="/competencias">Competencias individuales</Link>
          <Link to="/VerHabilidades">Ver habilidades</Link>
          {/* 🔽 Botón de descarga */}
          <button className="download-btn" onClick={handleDownload}>
            Descargar JSON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
