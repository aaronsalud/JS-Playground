const passport = require('passport');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ success: true });
    })
    app.post('/signin', requireSignIn, Authentication.signIn);
    app.post('/signup', Authentication.signUp);

}