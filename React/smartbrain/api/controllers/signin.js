const jwt = require('jsonwebtoken');
const redis = require('redis');
require('dotenv').config();

//Setup Redis
const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }

  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;

  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized');
    }
    return res.json({ id: reply });
  });
}

const signToken = id => {
  const jwtPayload = { sub: id };
  return jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, { expiresIn: '2 days' });
}

const setToken = (token, id) => {
  return Promise.resolve(redisClient.set(token, id));
}

const createSession = user => {
  const { id } = user;
  const token = signToken(id);

  return setToken(token, id)
    .then(() => ({ success: true, userId: id, token }))
    .catch((err) => console.log(err));
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? getAuthTokenId(req, res) :
    handleSignin(db, bcrypt, req, res)
      .then(data => data.id && data.email ? createSession(data) : Promise.reject(data))
      .then(session => res.json(session))
      .catch(err => res.status(400).json(err));
}

module.exports = {
  signinAuthentication,
  redisClient
}