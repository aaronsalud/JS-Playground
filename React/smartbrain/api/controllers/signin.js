const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');
require('dotenv').config();

const signinAuthentication = async (req, res, db) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(404).json({ error: "Invalid auth credentials" })

  try {
    const user = await db('users').select('id', 'password').first().where('email', email);

    if (!user) throw "Invalid auth credentials";
 
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) throw "Invalid auth credentials"

    const result = createSession(user.id);

    return res.status(200).json(result);
  }
  catch (e) { return res.status(404).json({ error: e }); }
}

module.exports = {
  signinAuthentication
}