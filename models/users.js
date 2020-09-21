const passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {type: String, required:true, unique:true},
    firstname: {type: String, required:true},
    surname: {type: String, required:true},
    password: {type: String, required:true},
    // picture: File,
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

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

// export userschema
module.exports = mongoose.model("User", UserSchema);