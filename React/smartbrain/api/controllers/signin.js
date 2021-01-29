const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');
require('dotenv').config();

const signinAuthentication = async (req, res, db) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw "Invalid auth credentials";

    const user = await db('users').select('id', 'password').first().where('email', email);

    if (!user) throw "Invalid auth credentials";

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) throw "Invalid auth credentials"

    const session = createSession(user.id);

    return res.json(session);
  }
  catch (e) { return res.status(404).json({ error: e }); }
}

module.exports = {
  signinAuthentication
}