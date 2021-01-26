const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');
require('dotenv').config();

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const { requireAuth } = require('./controllers/authorization');

const db = knex({
  // connect to your own database here
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const app = express();

app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send(db.users) })
app.post('/signin', (req, res) => signin.signinAuthentication(req, res, db));
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', requireAuth, (req, res) => { profile.getUserProfile(req, res, db) })
app.put('/image', requireAuth, (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', requireAuth, (req, res) => { image.handleApiCall(req, res) })
app.get('/images', requireAuth, (req, res) => { image.getUserImages(req, res, db) });

app.listen(5000, () => {
  console.log('app is running on port 5000');
})
