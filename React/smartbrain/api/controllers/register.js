const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');

const handleRegister = async (req, res, db) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) throw 'All input fields are required';

    const userExists = await db('users').first().where('email', email);

    if (userExists) throw 'User already exists';

    const userId = (await db('users').insert({ email, name, password: bcrypt.hashSync(password), joined: new Date() }).returning('id')).toString();

    if (!userId) throw 'Failed to create and account - Please contact your admin';

    const session = createSession(userId);
    return res.json(session);
  }
  catch (e) { return res.status(400).json({ error: e }) }
}

module.exports = {
  handleRegister
};


