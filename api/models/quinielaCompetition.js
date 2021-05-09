const mongoose = require('mongoose');

const { Schema } = mongoose;

const quinielaCompetitionSchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('QuinielaCompetition', quinielaCompetitionSchema);
