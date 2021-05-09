const mongoose = require('mongoose');

const { Schema } = mongoose;

function partidosLengthValidation(val) {
  return val.length >= 14 && val.length <= 15;
}

const quinielaTicketSchema = new Schema({
  jornada: { type: Number, required: true },
  fecha: { type: Date, required: true },
  temporada: { type: String, required: true },
  precio: { type: Number, min: 0, required: true },
  premio: { type: Number, min: 0, required: true },
  modalidad: { type: String, required: true },
  partidos: {
    type: [
      {
        fila: { type: Number, required: true },
        local: { type: String, required: true },
        visitante: { type: String, required: true },
        golesLocal: { type: Number, required: true },
        golesVisitante: { type: Number, required: true },
        pronosticos: {
          type: [
            {
              signo: { type: String, required: true },
            },
          ],
        },
        resultado: { type: String, required: true },
        resultadoAsString: { type: String, required: true },
        jornada: { type: String, required: true },
        competicion: { type: String, required: true },
        temporada: { type: String, required: true },
      },
    ],
    validate: [partidosLengthValidation, '{PATH} must have between 14 and 15 items'],
  },
});

module.exports = mongoose.model('QuinielaTicket', quinielaTicketSchema);
