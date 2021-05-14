const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'primitiva_years';

const primitivaYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('PrimitivaYear', primitivaYearSchema);
