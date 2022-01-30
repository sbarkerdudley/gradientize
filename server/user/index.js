const user = require('express').Router();

class User {
  constructor(id, username) {
    this.userId = id;
    this.username = username;
    this.state = generateRandomString(16);
  }
  static baseURL = 'https://api.spotify.com';
  static userURL = `${this.baseURL}/v1/me`;
  static topURL = `${this.userURL}/top`;
  static topArtistsURL = `${this.topURL}/artists`;
  static topAlbumsURL = `${this.topURL}/albums`;

  async getTopItems(category) {
    return await ('/top/:items/:timeframe', (req, res) => {
      let {artistOrAlbum, tacos} = req.params;
      res.send(artistOrAlbum + ': ' + tacos)

    })

  }

}


module.exports = User;
