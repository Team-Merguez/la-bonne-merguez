const mongoose = require('mongoose');
const City = require('./cities');
const User = require('./users');

const AnnouncementSchema = new mongoose.Schema ({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
        required : true
    },
    city_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : City,
        required : true
    },
    title: String,
    description: String,
    price: String,

    created: {
        type: Date,
        default: Date.now
    }
})

const Announcement = mongoose('Announcement', AnnouncementSchema);

module.exports = Announcement;