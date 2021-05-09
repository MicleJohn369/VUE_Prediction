const mongoose = require('mongoose');

const { Schema } = mongoose;

function numerosLengthValidation(val) {
  return val.length === 5;
}

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
      {
        type: [
          {
            numero: {
              type: Number, min: 1, max: 54, required: true,
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
            type: Number, min: 1, max: 54, required: true,
          },
        },
      ],
      validate: [numerosLengthValidation, '{PATH} must have 5 items'],
    },
    numeroClave: {
      type: Number, min: 0, max: 9, required: true,
    },
  },
});

module.exports = mongoose.model('GordoTicket', gordoTicketSchema);
