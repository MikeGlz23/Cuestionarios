import { Schema, model } from "mongoose"

const EsquemaDeCuestionario = new Schema({
    nombre: {
        type: String,
    },
    profesor: {
        type: String,
    },
    preguntas: {
        type: Number,
    },
    puntaje : {
        type: Number,
    }
}, {Collection: 'Cuestionarios'} )

export const modeloCuestionarios = model("Registro de Cuestionarios encontrados", EsquemaDeCuestionario)