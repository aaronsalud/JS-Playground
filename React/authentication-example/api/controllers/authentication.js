const User = require('../models/User');

exports.signUp = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide an email and a password' });
    }

    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {
        return res.status(422).send('User already exists');
    }

    const newUser = new User({ email, password });

    newUser.save((err) => {
        console.log('here');
        if (err) return next(err);
        res.json(user);
    });
};