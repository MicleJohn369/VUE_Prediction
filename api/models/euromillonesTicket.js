const mongoose = require('mongoose');

const { Schema } = mongoose;

function numerosLengthValidation(val) {
  return val.length === 5;
}

function estrellasLengthValidation(val) {
  return val.length === 2;
}

const euromillonesTicketSchema = new Schema({
  anyo: { type: Number, required: true },
  fecha: { type: Date, required: true },
  sorteo: { type: Number, required: true },
  precio: { type: Number, min: 0, required: true },
  premio: { type: Number, min: 0, required: true },
  apuestas: {
    combinaciones: [
      {
        numeros: {
          type: [
            {
              numero: {
                type: Number, min: 1, max: 50, required: true,
              },
            },
          ],
          validate: [numerosLengthValidation, '{PATH} must have 5 items'],
        },
        estrellas: {
          type: [
            {
              numero: {
                type: Number, min: 1, max: 12, required: true,
              },
            },
          ],
          validate: [estrellasLengthValidation, '{PATH} must have 2 items'],
        },
      },
    ],
  },
  resultado: {
    bolas: {
      type: [
        {
          numero: {
            type: Number, min: 1, max: 50, required: true,
          },
        },
      ],
      validate: [numerosLengthValidation, '{PATH} must have 5 items'],
    },
    estrellas: {
      type: [
        {
          numero: {
            type: Number, min: 1, max: 12, required: true,
          },
        },
      ],
      validate: [estrellasLengthValidation, '{PATH} must have 2 items'],
    },
  },
});

module.exports = mongoose.model('EuromillonesTicket', euromillonesTicketSchema);
