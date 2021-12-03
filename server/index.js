require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const auth = require('./auth');

const PORT = process.env.PORT;
const DIST_DIR = path.resolve(__dirname, 'client', 'dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

