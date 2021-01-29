const jwt = require('jsonwebtoken');
const redisClient = require('../config/redisClient');

const signToken = id => jwt.sign({ sub: id }, process.env.JWT_SECRET_KEY, { expiresIn: '2 days' });
const setToken = (token, id) => { return redisClient.set(token, id) };

const createSession = userId => {
    const token = signToken(userId);

    try {
        const result = setToken(token, userId);

        if (!result) return { error: 'An error has occured when signing in - Please contact your admin' };

        return { success: true, userId, token };
    }
    catch (e) { return { error: 'An error has occured when signing in - Please contact your admin' }; }
}

const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json('Unauthorized');

    return redisClient.get(authorization, (err, reply) => {
        if (err || !reply) return res.status(401).json('Unauthorized');
        return next();
    });
}

module.exports = {
    requireAuth,
    createSession
}