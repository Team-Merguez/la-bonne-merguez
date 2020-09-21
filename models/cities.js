const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema ({
    name: String,
    postCode: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('City', CitySchema);