from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from pathlib import Path

app = FastAPI()

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción restringir al dominio del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta al dataset
DATASET_PATH = Path(__file__).parent / "data.json"

# Leer dataset
def load_data():
    with open(DATASET_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

# Guardar dataset
def save_data(data):
    with open(DATASET_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

@app.get("/api/datos")
async def obtener_datos():
    data = load_data()
    return {"mensaje": "Datos enviados correctamente", "datos": data}

# Modelo de request para firmar
class FirmaRequest(BaseModel):
    nombre: str
    valor: bool

@app.post("/api/firmar")
async def firmar(req: FirmaRequest):
    data = load_data()
    if "firmas" not in data:
        data["firmas"] = {}
    
    # Actualizar firma
    data["firmas"][req.nombre] = req.valor
    
    # Guardar cambios en el JSON
    save_data(data)

    return {"mensaje": f"Firma actualizada para {req.nombre}", "firmas": data["firmas"]}
