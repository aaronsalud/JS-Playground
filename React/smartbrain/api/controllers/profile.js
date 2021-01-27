const cryptoJS = require('crypto-js');

const generateGravatarImage = email => {
  const md5Hash = cryptoJS.MD5(email).toString();
  return `https://www.gravatar.com/avatar/${md5Hash}`;
}

const getUserProfile = async (req, res, db) => {

  try {
    const users = await db.select('*').from('users').where({ id: req.params.id });
    const { id, name, email, entries, joined } = users[0];
    const profileData = { id, name, email, entries, profile_image: generateGravatarImage(email), joined, };
    return res.json(profileData);
  }
  catch (e) { res.status(404).json({ error: 'User info not found' }) };
}

module.exports = {
  getUserProfile
}