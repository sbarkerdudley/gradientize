require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const { auth } = require('./auth.js');

const PORT = process.env.PORT;
const DIST_DIR = path.resolve(__dirname, '../', 'client', 'dist');

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/main', express.static(DIST_DIR));


app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('<a href="http://localhost:3000/login">Login</a>')
})

app.get('/login', (req, res) => {
  res.redirect('/auth/spotify')
})