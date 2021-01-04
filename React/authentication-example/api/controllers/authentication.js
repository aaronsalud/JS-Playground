const jwt = require('jwt-simple');
const User = require('../models/User');
const config = require('../config');

const generateJWT = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signIn = async (req, res, next) => {
    // User has already had their email and password authenticated
    // We just need to give them a JWT
    res.send({ token: generateJWT(req.user) });
};

exports.signUp = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide an email and a password' });
    }

    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
        return res.status(422).send({ error: 'User already exists' });
    }

    const newUser = new User({ email, password });

    newUser.save((err) => {
        if (err) return next(err);
        res.json({ token: generateJWT(newUser) });
    });
};