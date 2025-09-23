from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Para permitir que el frontend (React, etc.) pueda hacer requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción mejor poner solo tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/datos")
async def recibir_datos(request: Request):
    data = await request.json()

    # Extraer todos los campos
    quienes_somos = data.get("Quienes somos y que hacemos")
    objetivo = data.get("Nuestro objetivo")
    principios = data.get("Nuestros principios")
    normas = data.get("Nuestras normas")
    cosas_nunca = data.get("Cosas que nunca haremos")
    decisiones = data.get("Como tomamos decisiones")
    reglas_rotas = data.get("Que hacemos cuando se rompen las reglas")
    pedir_ayuda = data.get("Cuando y como pedimos ayuda")

    # Retornamos una respuesta con todos los datos recibidos
    return {
        "mensaje": "Datos recibidos correctamente",
        "datos": {
            "whoWeAre": quienes_somos,
            "purpose": objetivo,
            "values": principios,
            "alwaysDo": normas,
            "neverDo": cosas_nunca,
            "decisions": decisiones,
            "rulesBroken": reglas_rotas,
            "askHelp": pedir_ayuda
        }
    }
