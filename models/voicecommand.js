const mongoose = require('mongoose');

const VoiceCommandSchema = new mongoose.Schema({
    command: { type: String, required: true },
});

module.exports = mongoose.model('VoiceCommand', VoiceCommandSchema);
