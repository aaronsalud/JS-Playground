const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');
require('dotenv').config();

const signinAuthentication = async (req, res, db) => {
  try {
    const { email, password } = req.body;
    const errorMessage = 'Invalid auth credentials';
    if (!email || !password) throw errorMessage;

    const user = await db('users').select('id', 'password').first().where('email', email);
    if (!user) throw errorMessage;

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) throw errorMessage;

    const session = createSession(user.id);
    if (session.error) throw session.error;

    return res.json(session);
  }
  catch (error) { return res.status(404).json({ error }); }
}

module.exports = {
  signinAuthentication
}