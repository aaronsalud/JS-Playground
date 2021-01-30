const bcrypt = require('bcrypt-nodejs');
const { createSession } = require('./authorization');

const handleRegister = async (req, res, db) => {
  try {
    const { email, name, password } = req.body;
    const errorMessage = {
      inputFields: 'All input fields are required',
      existingUser: 'User already exists',
      accountCreation: 'Failed to create an account - Please contact your admin'
    };

    if (!email || !name || !password) throw errorMessage.inputFields;

    const userExists = await db('users').first().where('email', email);
    if (userExists) throw errorMessage.existingUser;

    const userId = (await db('users').insert({ email, name, password: bcrypt.hashSync(password), joined: new Date() }).returning('id')).toString();
    if (!userId) throw errorMessage.accountCreation;

    const session = createSession(userId);
    if (!session) throw errorMessage.accountCreation;

    return res.json(session);
  }
  catch (error) { return res.status(400).json({ error }); }
}

module.exports = {
  handleRegister
};


