import json
from datetime import datetime

def guardar_datos(data, archivo="data.json"):
    # Agregar fecha actual
    data["fecha_actualizacion"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Guardar el JSON en el archivo
    with open(archivo, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

# Ejemplo de uso
if __name__ == "__main__":
    # Cargar datos desde el archivo JSON
    with open("data.json", "r", encoding="utf-8") as file:
        datos = json.load(file)
    
    # Guardar los datos con la fecha actual
    guardar_datos(datos)