require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const auth = require('./auth');

const PORT = process.env.PORT || 3000;
const DIST = path.resolve(__dirname, '../', 'client', 'dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(DIST));

app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
  // res.send('<a href="http://localhost:3000/login">Login</a>')
// })

app.get('/login', (req, res) => {
  res.redirect('/auth/spotify')
})


app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})