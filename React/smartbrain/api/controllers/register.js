const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');

const handleRegister = async (req, res, db) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) throw 'All input fields are required';

    const userExists = await db('users').first().where('email', email);

    if (userExists) throw 'User already exists';

    const user = await db('users').select('id').first().insert({ email, name, password: bcrypt.hashSync(password), joined: new Date() });

    if (!user) throw 'Failed to create and account - Please contact your admin';

    const session = await createSession(user.id);
    return res.json(session);
  }
  catch (e) { return res.status(400).json({ error: e }) }
}

module.exports = {
  handleRegister
};


