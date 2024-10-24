const mongoose = require('mongoose');

const WhiteboardDataSchema = new mongoose.Schema({
    content: { type: String, required: true },
});

module.exports = mongoose.model('WhiteboardData', WhiteboardDataSchema);