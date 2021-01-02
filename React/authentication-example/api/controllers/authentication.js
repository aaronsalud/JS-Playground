const User = require('../models/User');

exports.signUp = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide an email and a password' });
    }

    User.findOne({ email }, (err, existingUser) => {

        if (existingUser) {
            return res.status(422).send('User already exists');
        }

        const user = new User({ email, password });

        user.save((err) => {
            if (err) return next(err);
            res.json(user);
        });
    });
};