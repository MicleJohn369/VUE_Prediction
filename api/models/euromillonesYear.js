const mongoose = require('mongoose');

const { Schema } = mongoose;

const euromillonesYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

module.exports = mongoose.model('EuromillonesYear', euromillonesYearSchema);
