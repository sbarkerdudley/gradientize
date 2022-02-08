export const genres = {
  acoustic: 'Acoustic',
  afrobeat: 'Afrobeat',
  'alt-rock': 'Alt Rock',
  alternative: 'Alternative',
  ambient: 'Ambient',
  anime: 'Anime',
  'black-metal': 'Black Metal',
  bluegrass: 'Bluegrass',
  blues: 'Blues',
  bossanova: 'Bossanova',
  brazil: 'Brazil',
  breakbeat: 'Breakbeat',
  british: 'British',
  cantopop: 'Cantopop',
  'chicago-house': 'Chicago House',
  children: 'Children',
  chill: 'Chill',
  classical: 'Classical',
  club: 'Club',
  comedy: 'Comedy',
  country: 'Country',
  dance: 'Dance',
  dancehall: 'Dancehall',
  'death-metal': 'Death Metal',
  'deep-house': 'Deep House',
  'detroit-techno': 'Detroit Techno',
  disco: 'Disco',
  disney: 'Disney',
  'drum-and-bass': 'Drum And Bass',
  dub: 'Dub',
  dubstep: 'Dubstep',
  edm: 'Edm',
  electro: 'Electro',
  electronic: 'Electronic',
  emo: 'Emo',
  folk: 'Folk',
  forro: 'Forro',
  french: 'French',
  funk: 'Funk',
  garage: 'Garage',
  german: 'German',
  gospel: 'Gospel',
  goth: 'Goth',
  grindcore: 'Grindcore',
  groove: 'Groove',
  grunge: 'Grunge',
  guitar: 'Guitar',
  happy: 'Happy',
  'hard-rock': 'Hard Rock',
  hardcore: 'Hardcore',
  hardstyle: 'Hardstyle',
  'heavy-metal': 'Heavy Metal',
  'hip-hop': 'Hip-Hop',
  holidays: 'Holidays',
  'honky-tonk': 'Honky-Tonk',
  house: 'House',
  idm: 'Idm',
  indian: 'Indian',
  indie: 'Indie',
  'indie-pop': 'Indie Pop',
  industrial: 'Industrial',
  iranian: 'Iranian',
  'j-dance': 'J-Dance',
  'j-idol': 'J-Idol',
  'j-pop': 'J-Pop',
  'j-rock': 'J-Rock',
  jazz: 'Jazz',
  'k-pop': 'K-Pop',
  kids: 'Kids',
  latin: 'Latin',
  latino: 'Latino',
  malay: 'Malay',
  mandopop: 'Mandopop',
  metal: 'Metal',
  'metal-misc': 'Metal Misc',
  metalcore: 'Metalcore',
  'minimal-techno': 'Minimal Techno',
  movies: 'Movies',
  mpb: 'MPB',
  'new-age': 'New Age',
  'new-release': 'New Release',
  opera: 'Opera',
  pagode: 'Pagode',
  party: 'Party',
  'philippines-opm': 'Philippines Opm',
  piano: 'Piano',
  pop: 'Pop',
  'pop-film': 'Pop Film',
  'post-dubstep': 'Post Dubstep',
  'power-pop': 'Power Pop',
  'progressive-house': 'Progressive House',
  'psych-rock': 'Psych-Rock',
  punk: 'Punk',
  'punk-rock': 'Punk Rock',
  'r-n-b': 'R&B',
  'rainy-day': 'Rainy Day',
  reggae: 'Reggae',
  reggaeton: 'Reggaeton',
  'road-trip': 'Road Trip',
  rock: 'Rock',
  'rock-n-roll': 'Rock N Roll',
  rockabilly: 'Rockabilly',
  romance: 'Romance',
  sad: 'Sad',
  salsa: 'Salsa',
  samba: 'Samba',
  sertanejo: 'Sertanejo',
  'show-tunes': 'Show Tunes',
  'singer-songwriter': 'Singer-Songwriter',
  ska: 'Ska',
  sleep: 'Sleep',
  songwriter: 'Songwriter',
  soul: 'Soul',
  soundtracks: 'Soundtracks',
  spanish: 'Spanish',
  study: 'Study',
  summer: 'Summer',
  swedish: 'Swedish',
  'synth-pop': 'Synth-Pop',
  tango: 'Tango',
  techno: 'Techno',
  trance: 'Trance',
  'trip-hop': 'Trip-Hop',
  turkish: 'Turkish',
  'work-out': 'Workout',
  'world-music': 'World Music',
};


export function parseSpotifyResults(res) {
  if (res.data) {
    console.log(Object.keys(res), 'DATA');
    res = res.data
  }
    if (res.items) {
      console.log(Object.keys(res), 'ITEMS');

      return res;
    }

  if (res.next) {
    console.log(Object.keys(res), 'NEXT');
    return res
  }
  if (res.artists) {
    console.log(Object.keys(res), 'ARTISTS');
    res = res.artists
    return res;
  }


  console.log('ELSE');
  return res
}

  // if (items.artists) {
  //   items = items.artists.items;
  // } else if (items.items) {
  //   items = items.items;
  // }