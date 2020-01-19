const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('feedback', feedbackSchema);