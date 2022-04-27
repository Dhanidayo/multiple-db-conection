const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,

    },
    phoneNumber: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
});