const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'bonoloto_years';

const bonolotoYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('BonolotoYear', bonolotoYearSchema);
