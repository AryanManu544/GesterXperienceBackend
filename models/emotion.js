const mongoose = require('mongoose');

const EmotionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    intensity: { type: Number, required: true },
});

module.exports = mongoose.model('Emotion', EmotionSchema);