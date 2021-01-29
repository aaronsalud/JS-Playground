const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');

const handleRegister = async (req, res, db) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) return res.status(400).json('All input fields are required');

  const userExists = await db('users').first().where('email', '=', email);

  if (userExists) return res.status(400).json({ error: 'User already exists' });

  try {
    const hash = bcrypt.hashSync(password);
    const userId = await db('users').first().insert({ email, name, password: hash, joined: new Date() }).returning('id');
    const result = await createSession(userId);
    return res.json(result);
  }
  catch (e) { return res.status(400).json({ error: 'Failed to create and account - Please contact your admin' }) }
}

module.exports = {
  handleRegister
};


