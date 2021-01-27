const bcrypt = require('bcrypt-nodejs');

const handleRegister = async (req, res, db) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) return res.status(400).json('All input fields are required');

  const users = await db.select('*').from('users').where('email', '=', email);

  if (users && users.length) return res.status(400).json({ error: 'User already exists' });

  try {
    const hash = bcrypt.hashSync(password);
    const user = await db('users').insert({ email, name, password: hash, joined: new Date() }).returning(['name', 'email', 'joined']);
    return res.status(404).json(user);
  }
  catch (e) { return res.status(400).json({ error: 'Failed to create and account - Please contact your admin' }) }
}

module.exports = {
  handleRegister
};


