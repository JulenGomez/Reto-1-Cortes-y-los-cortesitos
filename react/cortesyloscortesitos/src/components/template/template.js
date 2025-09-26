import React, { useEffect, useState } from "react";
import "./template.css";

const Template = () => {
  const [data, setData] = useState(null);

  // Cargar datos al montar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/datos");
        const result = await response.json();
        setData(result.datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  // Manejar firma de un integrante
  const handleFirmar = async (nombre) => {
    try {
      await fetch("http://127.0.0.1:8000/api/firmar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, valor: true }),
      });

      // Volver a pedir los datos para refrescar el estado
      const response = await fetch("http://127.0.0.1:8000/api/datos");
      const result = await response.json();
      setData(result.datos);
    } catch (error) {
      console.error("Error al firmar:", error);
    }
  };

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="canvas">
      <h1 className="title">Scrum Team Charter Canvas</h1>
      <p className="subtitle">
        Who we are, what matters to us and how we use Scrum
      </p>

      <div className="row">
        <div className="box large">
          <h2>¿Quiénes somos y qué hacemos?</h2>
          <p>{data["Quienes somos y que hacemos"]}</p>
        </div>
        <div className="col">
          <div className="box">
            <h2>Nuestro objetivo</h2>
            <p>{data["Nuestro objetivo"]}</p>
          </div>
          <div className="box">
            <h2>Nuestros principios</h2>
            <p>{data["Nuestros principios"]}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box medium">
          <h2>Nuestras normas</h2>
          <p>{data["Nuestras normas"]}</p>
        </div>
        <div className="box medium">
          <h2>Cosas que nunca haremos</h2>
          <p>{data["Cosas que nunca haremos"]}</p>
        </div>
      </div>

      <div className="row">
        <div className="box medium">
          <h2>Cómo tomamos decisiones</h2>
          <p>{data["Como tomamos decisiones"]}</p>
        </div>
        <div className="box medium">
          <h2>Qué hacemos cuando se rompen las reglas</h2>
          <p>{data["Que hacemos cuando se rompen las reglas"]}</p>
        </div>
      </div>

      <div className="row">
        <div className="box medium">
          <h2>Cuándo y cómo pedimos ayuda</h2>
          <p>{data["Cuando y como pedimos ayuda"]}</p>
        </div>
      </div>

      {data["firmas"] && (
        <div className="row">
          <div className="box large">
            <h2>Firmas</h2>

            {Object.entries(data["firmas"]).map(([integrante, info]) => (
              <div key={integrante} className="firma-item">
                <strong>{integrante}:</strong>{" "}
                {info.firmado ? (
                  <>
                    ✔️ Firmado{" "}
                    {info.fecha && (
                      <span style={{ color: "#666", fontSize: "0.9em" }}>
                        ({info.fecha})
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    ❌ Pendiente{" "}
                    <button
                      className="firmar-btn"
                      onClick={() => handleFirmar(integrante)}
                    >
                      Firmar
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
