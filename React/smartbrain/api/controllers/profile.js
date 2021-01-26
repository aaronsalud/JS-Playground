const cryptoJS = require('crypto-js');

const generateGravatarImage = email => {
  const md5Hash = cryptoJS.MD5(email).toString();
  return `https://www.gravatar.com/avatar/${md5Hash}`;
}

const getUserProfile = async (req, res, db) => {
  const { id } = req.params;

  try {
    const users = await db.select('*').from('users').where({ id });
    const userData = { ...users[0], profile_image: generateGravatarImage(users[0].email) };
    return res.json(userData);
  }
  catch (e) { res.status(404).json({ error: 'User info not found' }) };
}

module.exports = {
  getUserProfile
}