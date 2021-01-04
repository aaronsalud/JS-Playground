const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    // Verify email and password, call done with the user
    // If it is correct username and password otherwose call done with false
    const user = await User.findOne({ email }).exec();
    if (!user) return done(null, false);

    // Compare passwords= is `password` equal to user.password?
    user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false)

        return done(null, user);
    });
});

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    // Check if the user ID in the payload exists in our DB
    // If it does, call 'done' and pass the user object
    // Otherwise, call done without the user object and return false instead
    const user = await User.findById(payload.sub).exec();

    if (!user) return done(null, false);

    done(null, user);
});

// Configure this passport strategy
passport.use(jwtLogin);
passport.use(localLogin);