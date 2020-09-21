const mongoose = require('mongoose');
const user = require('./users');
const ads = require('./ads');

const MessageSchema = new mongoose.Schema ({
    recipient_user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : user,
        required : true
    },
    sender_user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : user,
        required : true
    },
    announcement_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : ads,
        required : true
    },
    content: String,
    price: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Message', MessageSchema);