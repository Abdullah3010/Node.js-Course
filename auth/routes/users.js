const express = require('express');
const router = express.Router();
const regex = require('../config/regex');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const passport = require('passport');

router.get('/login', (req, res) => {
    res.send('Login page');
});

router.get('/register', (req, res) => {
    res.send('Register page');
});

router.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    let errors = [];
    if(!name || !email || !password){
        errors.push({msg: 'Please fill in all fields'});
    }
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }
    if(!email.match(regex.email)){
        errors.push({msg: 'Email is not valid'});
    }

    if(errors.length > 0){
        res.json(errors);
    }else{
        // res.send('pass');
        User.findOne({email: email}).then(user => {
            if(user){
                errors.push({msg: 'Email is already registered'});
                res.json(errors);
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    if(err) throw err;
                    bcrypt.hash(password,salt,(err, hash) => {
                        if(err) throw err;
                        const newUser = new User({
                            name,
                            email,
                            password: hash,
                        });
                        newUser.save().then(user => {
                            res.json(user);
                        }).catch(err => {
                            console.log(err);
                        });
                    });
                });
                
            }
        });
    }
});

router.post('/login', (req, res,next) => {
    const {email, password} = req.body;
    let errors = [];
    if(!email){
        errors.push({msg: 'email is required'});
    }
    if(!password){
        errors.push({msg: 'password is required'});
    }
    passport.authenticate('local', {
        successRedirect: '/users/dashboard',
        failureRedirect: '/users/login',
        failureFlash: false,
    })(req, res, next);

});

router.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
});
module.exports = router;