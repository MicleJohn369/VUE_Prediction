const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'primitiva_tickets';

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
      [
        {
          numero: {
            type: Number, min: 1, max: 49, required: true,
          },
        },
      ],
    ],
  },
  resultado: {
    bolas: [
      {
        numero: {
          type: Number, min: 1, max: 49, required: true,
        },
      },
    ],
    reintegro: {
      type: Number, min: 0, max: 9, required: true,
    },
    complementario: {
      type: Number, min: 1, max: 49, required: true,
    },
  },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('PrimitivaTicket', primitivaTicketSchema);
