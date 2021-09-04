const mongoose = require('mongoose');

const { Schema } = mongoose;

const collectionName = 'quiniela_teams';

const quinielaTeamSchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
}, {
  collection: collectionName,
});

module.exports = mongoose.model('QuinielaTeam', quinielaTeamSchema);
