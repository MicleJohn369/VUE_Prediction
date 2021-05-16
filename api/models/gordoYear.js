const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'gordo_years';

const gordoYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('GordoYear', gordoYearSchema);
