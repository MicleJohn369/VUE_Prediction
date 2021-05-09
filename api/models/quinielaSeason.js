const mongoose = require('mongoose');

const { Schema } = mongoose;

const quinielaSeasonSchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('QuinielaSeason', quinielaSeasonSchema);
