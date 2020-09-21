const express = require('express');
const router = express.Router();
const multer = require('multer');

// importing User Schema
const User = require('../models/users');
// importing File-upload configuration
const { storage, fileFilter } = require('../middleware/file-upload');

// Multer config
const upload = multer({
    storage : storage,
    limits  : {
        fileSize : 1024 * 1024 * 5
    },
    fileFilter : fileFilter
})

// Login config
router.post('/login', function(req, res) {
    // Router login process
    userController.doLogin = function(req, res) {
        if(!req.body.username){
            res.json({success: false, message: "Vous n'avez pas rentrer de nom d'utilisateur"})
        } else {
            if(!req.body.password){
                res.json({success: false, message: "Vous n'avez pas rentrer de mot de pass"})
            } else {
                passport.authenticate('local', function (err, user, info) {
                    if(err){
                        res.json({success: false, message: err})
                    } else {
                        if (! user) {
                            res.json({success: false, message: "le nom d'utilisateur ou mot de pass n'est pas bon"})
                    } else {
                        req.login(user, function(err){
                            if(err){
                                res.json({success: false, message: err})
                            } else {
                                const token =  jwt.sign({
                                    userId : user._id,
                                    username:user.username
                                    },
                                        secretkey
                                    ,{
                                        expiresIn: '24h'
                                    })
                                    res.json({
                                        success:true,
                                        message:"Authentication réussie",
                                        token: token
                                    });
                                }
                            })
                        }
                    }
                })(req, res);
            }
        }
    };
});

// Signup config
router.post('/signup', (req, res) => {
    // Request "user" parameters
    Users = new User({
        email: req.body.email,
        username : req.body.username
    });

    // Register "user" password
    User.register(Users, req.body.password, function(err, user) {
        if (err) {
            res.json({
                success:false,
                message:"Il y'a une erreur d'enregistrement, veuillez recommencer. Erreur: ", err})
        } else {
            res.json({
                success: true,
                message: "Vous vous êtes bien enregistré"})
        }
    });

    console.log(User)
})

module.exports = router;