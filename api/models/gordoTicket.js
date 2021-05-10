const mongoose = require('mongoose');

const { Schema } = mongoose;

const gordoTicketSchema = new Schema({
  anyo: { type: Number, required: true },
  fecha: { type: Date, required: true },
  sorteo: { type: Number, required: true },
  precio: { type: Number, min: 0, required: true },
  premio: { type: Number, min: 0, required: true },
  apuestas: {
    numeroClave: {
      type: Number, min: 0, max: 9, required: true,
    },
    combinaciones: [
      [
        {
          numero: {
            type: Number, min: 1, max: 54, required: true,
          },
        },
      ],
    ],
  },
  resultado: {
    bolas: [
      {
        numero: {
          type: Number, min: 1, max: 54, required: true,
        },
      },
    ],
    numeroClave: {
      type: Number, min: 0, max: 9, required: true,
    },
  },
});

module.exports = mongoose.model('GordoTicket', gordoTicketSchema);
