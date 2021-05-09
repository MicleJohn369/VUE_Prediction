const mongoose = require('mongoose');

const { Schema } = mongoose;

const gordoYearSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

module.exports = mongoose.model('GordoYear', gordoYearSchema);
