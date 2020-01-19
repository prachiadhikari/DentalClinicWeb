const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    Cemail: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
     fullName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('contact', contactSchema);