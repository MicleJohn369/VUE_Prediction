const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'euromillones_years';

const euromillonesYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('EuromillonesYear', euromillonesYearSchema);
