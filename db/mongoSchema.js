const mongoose = require('mongoose');

const User = new mongoose.Schema({
  id: {
    type: primary_id,
    index: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  }
  top: {
    artists: {
      id: String,
      name: String,
      spotify_url: String,
    },
    albums: {

    }
  }
});


const Album = new mongoose.Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  s_id: String,
  type: 'album',
  images: [String],
  href: String,
  uri: String,
  url: String
});

const Artist = new mongoose.Schema({
  id: {
    type: String,
    index: true,
    unique: true
  },
  genres: [String],
  artists: [Artist],
  type: 'artist',
  images: [{url: String, height: String, width: String }],
  href: String,
  uri: String,
  url: String
});

/*

 {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/2xvtxDNInKDV4AvGmjw6d1"
    },
    "followers" : {
      "href" : null,
      "total" : 234977
    },
    "genres" : [ "glitchcore", "underground hip hop" ],
    "href" : "https://api.spotify.com/v1/artists/2xvtxDNInKDV4AvGmjw6d1",
    "id" : "2xvtxDNInKDV4AvGmjw6d1",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/ab6761610000e5ebd8a32f7731e293fd4ec6914b",
      "width" : 640
    }, {
      "height" : 320,
      "url" : "https://i.scdn.co/image/ab67616100005174d8a32f7731e293fd4ec6914b",
      "width" : 320
    }, {
      "height" : 160,
      "url" : "https://i.scdn.co/image/ab6761610000f178d8a32f7731e293fd4ec6914b",
      "width" : 160
    } ],
    "name" : "Bladee",
    "popularity" : 68,
    "type" : "artist",
    "uri" : "spotify:artist:2xvtxDNInKDV4AvGmjw6d1"
  }





{
  "album_group": "album",
  "album_type": "album",
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
      },
      "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
      "id": "0kbYTNQb4Pb1rPbbaF0pT4",
      "name": "Miles Davis",
      "type": "artist",
      "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
    }
  ],

  "external_urls": {
    "spotify": "https://open.spotify.com/album/2j4kRyY7kLm9NuciAHyzg5"
  },
  "href": "https://api.spotify.com/v1/albums/2j4kRyY7kLm9NuciAHyzg5",
  "id": "2j4kRyY7kLm9NuciAHyzg5",
  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b27319b87239d0a7d8f402b8044f",
      "width": 640
    },
    {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e0219b87239d0a7d8f402b8044f",
      "width": 300
    },
    {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d0000485119b87239d0a7d8f402b8044f",
      "width": 64
    }
  ],
  "name": "Star People",
  "release_date": "1983-01-01",
  "release_date_precision": "day",
  "total_tracks": 6,
  "type": "album",
  "uri": "spotify:album:2j4kRyY7kLm9NuciAHyzg5"
},



*/