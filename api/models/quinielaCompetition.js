const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'quiniela_competitions';

const quinielaCompetitionSchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('QuinielaCompetition', quinielaCompetitionSchema);
