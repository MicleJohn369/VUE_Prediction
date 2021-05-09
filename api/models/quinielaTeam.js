const mongoose = require('mongoose');

const { Schema } = mongoose;

const quinielaTeamSchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('QuinielaTeam', quinielaTeamSchema);
