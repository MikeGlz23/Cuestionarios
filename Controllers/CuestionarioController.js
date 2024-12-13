import { modeloCuestionario } from "Models/CuestionarioModel.js";

modeloCuestionario.create([
    {
        "nombre": "Matematicas",
        "profesor": "Juan Perez",
        "preguntas": 50,
        "puntaje": 100
    },
    {
        "nombre": "Español",
        "profesor": "Juan Escutia",
        "preguntas": 40,
        "puntaje": 100
    },
    {
        "nombre": "Fisica",
        "profesor": "Pedro Perez",
        "preguntas": 30,
        "puntaje": 100
    },
    {
        "nombre": "Programacion",
        "profesor": "Luis Barron",
        "preguntas": 20,
        "puntaje": 100
    },
]);

export const test = () => {
    console.log("Se han creado los nuevos cuestionarios");
}