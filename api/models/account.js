const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  estaActivo: { type: Boolean, required: true },
  role: { type: String, required: true },
  estaBaneado: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Account', accountSchema);
