const mongoose = require('mongoose');
const ads = require('./ads');

const PictureSchema = new mongoose.Schema ({
    ads_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : ads,
        required : true
    },
    picture: {
        data: Buffer,
        contentType: String,
        url: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Picture', PictureSchema);