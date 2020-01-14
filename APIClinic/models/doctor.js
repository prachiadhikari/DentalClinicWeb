const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    Drname: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    }, 
     DrType: {
        type: String,
        required: true
    },
    University: {
        type: String,
        required: true
    },
    
    NMCNo: {
        type: String,
        required: true
    },
    Drimage: {
        type: String
    }
});

module.exports = mongoose.model('doctor', doctorSchema);