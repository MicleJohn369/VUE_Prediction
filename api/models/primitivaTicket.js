const mongoose = require('mongoose');

const { Schema } = mongoose;

function numerosLengthValidation(val) {
  return val.length === 6;
}

const primitivaTicketSchema = new Schema({
  anyo: { type: Number, required: true },
  fecha: { type: Date, required: true },
  sorteo: { type: Number, min: 1, required: true },
  precio: { type: Number, min: 0, required: true },
  premio: { type: Number, min: 0, required: true },
  apuestas: {
    reintegro: {
      type: Number, min: 0, max: 9, required: true,
    },
    combinaciones: [
      {
        type: [
          {
            numero: {
              type: Number, min: 1, max: 49, required: true,
            },
          },
        ],
        validate: [numerosLengthValidation, '{PATH} must have 5 items'],
      },
    ],
  },
  resultado: {
    bolas: {
      type: [
        {
          numero: {
            type: Number, min: 1, max: 49, required: true,
          },
        },
      ],
      validate: [numerosLengthValidation, '{PATH} must have 5 items'],
    },
    reintegro: {
      type: Number, min: 0, max: 9, required: true,
    },
    complementario: {
      type: Number, min: 1, max: 49, required: true,
    },
  },
});

module.exports = mongoose.model('PrimitivaTicket', primitivaTicketSchema);
