const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');
require('dotenv').config();

const signinAuthentication = async (req, res, db) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(404).json({ error: "Invalid auth credentials" })

  try {
    const users = await db.select('*').from('users').where('email', '=', email);

    const isValid = bcrypt.compareSync(password, users[0].password);

    if (!isValid) return res.status(404).json({ error: "Invalid auth credentials" });

    const result = await createSession(users[0]);

    return res.status(200).json(result);
  }
  catch (e) { return res.status(404).json({ error: "Invalid auth credentials" }); }
}

module.exports = {
  signinAuthentication
}