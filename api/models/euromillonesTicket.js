const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'euromillones_tickets';

const euromillonesTicketSchema = new Schema({
  anyo: { type: Number, required: true },
  fecha: { type: Date, required: true },
  sorteo: { type: Number, required: true },
  precio: { type: Number, min: 0, required: true },
  premio: { type: Number, min: 0, required: true },
  apuestas: {
    combinaciones: [
      {
        numeros: [
          {
            numero: {
              type: Number, min: 1, max: 50, required: true,
            },
          },
        ],
        estrellas: [
          {
            numero: {
              type: Number, min: 1, max: 12, required: true,
            },
          },
        ],
      },
    ],
  },
  resultado: {
    bolas: [
      {
        numero: {
          type: Number, min: 1, max: 50, required: true,
        },
      },
    ],
    estrellas: [
      {
        numero: {
          type: Number, min: 1, max: 12, required: true,
        },
      },
    ],
  },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('EuromillonesTicket', euromillonesTicketSchema);
