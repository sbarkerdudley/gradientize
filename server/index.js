require('dotenv').config();
const app = require('./app');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at ${process.env.CLIENT_URL}`);
  // console.log(`Listening at http://localhost:${PORT}`);
});
