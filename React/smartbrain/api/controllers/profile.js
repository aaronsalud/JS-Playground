const cryptoJS = require('crypto-js');

const generateGravatarImage = email => {
  const md5Hash = cryptoJS.MD5(email).toString();
  return `https://www.gravatar.com/avatar/${md5Hash}`;
}

const getUserProfile = async (req, res, db) => {

  try {
    const user = await db('users').first().select('id', 'name', 'email', 'entries', 'joined').where('id', req.params.id);
    const profileData = { ...user, profile_image: generateGravatarImage(user.email) };
    return res.json(profileData);
  }
  catch (e) { return res.status(404).json({ error: 'User info not found' }) };
}

module.exports = {
  getUserProfile
}