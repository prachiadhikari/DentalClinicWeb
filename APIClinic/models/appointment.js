const mongoose = require('mongoose');

const appoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }, 
     time: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    
    problem: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('appointment', appoSchema);