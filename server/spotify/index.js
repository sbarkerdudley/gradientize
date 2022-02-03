const spotify = require('express').Router();
const axios = require('axios');

spotify.get('/me/top/:type', (req, res) => {
  let { type } = req.params;
  let { Authorization } = req.headers;
  res.send(JSON.stringify(req.headers['Authorization']));
});

spotify.get('/test', (req, res) => {
  try {
    var thing = { message: 'Hello World' };
    throw new Error('this is error :(  ):', { sefgr: true });
  } catch (error) {
    error.options = {
      cause: `<a href="mailto:sbarkerdudley@gmail.com?body=${JSON.stringify(
        error,
      )}"></a>`,
    };
    thing = Object.create(error);
    return 'errrrrrror';
  } finally {
    res.sendFile();
  }
});

module.exports = spotify;
