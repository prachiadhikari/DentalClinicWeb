const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
    treatmentName: {
        type: String,
        required: true
    },
    treatmentImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('treatment', treatmentSchema);