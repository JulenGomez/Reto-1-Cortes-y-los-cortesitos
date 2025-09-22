from fastapi import FastAPI
from pydantic import BaseModel
import json

app = FastAPI()

# Define el esquema de los 14 campos
class FormData(BaseModel):
    campo1: str
    campo2: str
    campo3: int
    campo4: float
    campo5: str
    campo6: str
    campo7: bool
    campo8: str
    campo9: str
    campo10: int
    campo11: str
    campo12: float
    campo13: str
    campo14: str

@app.post("/guardar")
async def guardar_datos(data: FormData):
    # Convertimos a dict
    datos_dict = data.model_dump()

    # Guardamos en un archivo .json (acumula múltiples entradas)
    try:
        with open("datos.json", "r", encoding="utf-8") as f:
            existentes = json.load(f)
    except FileNotFoundError:
        existentes = []

    existentes.append(datos_dict)

    with open("datos.json", "w", encoding="utf-8") as f:
        json.dump(existentes, f, indent=4, ensure_ascii=False)

    return {"status": "ok", "mensaje": "Datos guardados correctamente"}
