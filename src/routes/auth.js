const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { config } = require('../../config');
const User = require('../models/User');

require('../../utils/auth/basic-strategy');

router.post('/signup', async function(req, res, next){
    const { name, email, password } = req.body;
    console.log({name, email, password});

    try {
        const createUser = await User.create({ name, email, password });
        res.status(201).json({
            data: createUser,
            message: 'user created sucessfully'
        })
    } catch (error) {
        next(error);
    }
});

router.post('/login', async function(req, res, next){
    //This mean that in postman you will use basic authentification
    passport.authenticate('basic', function(error, user){
        try {
            console.log({user, error});
            
            if(error || !user){
                next(new Error('Unauthorized user #YSoporta!'));
                return;
            }

            req.login(user, { session: false }, async function(error){
                console.log({error});
                
                if(error){
                    next(error);
                }

                const { _id: id, name, email } = user;
                const body = { id, name, email };
                const token = jwt.sign({ user: body}, config.authJwtSecret, {
                    expiresIn: '45m',
                });
                return res.status(200).json({
                    access_token: token,
                    user: { id, name, email }
                });
            });
        } catch (error) {
            next(error);
        }
    })(req, res, next);
});

module.exports = router;

