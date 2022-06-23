const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../config');
const User = require('../../src/models/User');

passport.use(
    new Strategy(
        {
            secretOrKey: config.authJwtSecret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async function(tokenPayload, done){
            console.log({tokenPayload});
            
            try {
                return done(null, tokenPayload.user);
            } catch (error) {
                console.log({error});
                
                done(error);
            }
        }
    )
)
