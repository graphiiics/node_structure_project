const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcrypt');
const User = require('../../src/models/User');

passport.use(
    new BasicStrategy(async function(email, password, done){
        console.log('BASic', {email, password});
        
        try {
            const user = await User.findOne({email});

            if(!user){
                return done(new Error('Unauthorized, user does not exists'), false);
            }

            const validate = await user.isValidPassword(password);
            if(!validate){
                return done(new Error('Unauthorized, incorrect password'), false);
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
)