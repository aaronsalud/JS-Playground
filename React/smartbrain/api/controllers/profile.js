const cryptoJS = require('crypto-js');

const generateGravatarImage = email => {
  const md5Hash = cryptoJS.MD5(email).toString();
  return `https://www.gravatar.com/avatar/${md5Hash}`;
}

const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({ id })
    .then(user => {
      if (user.length) {
        let userData = { ...user[0], profile_image: generateGravatarImage(user[0].email) };
        res.json(userData)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfileGet
}