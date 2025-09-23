from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

# Para permitir que el frontend (React) pueda hacer requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción mejor poner solo tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta al dataset
DATASET_PATH = Path(__file__).parent / "data.json"

# Cargar dataset desde el archivo JSON
with open(DATASET_PATH, "r", encoding="utf-8") as f:
    dataset = json.load(f)

@app.get("/api/datos")
async def obtener_datos():
    return {
        "mensaje": "Datos enviados correctamente",
        "datos": dataset
    }
