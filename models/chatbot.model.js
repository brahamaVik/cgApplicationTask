const mongoose = require('mongoose');

const botSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('chatbot', botSchema);
