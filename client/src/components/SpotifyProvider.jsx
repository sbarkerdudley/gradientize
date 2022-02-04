import React, { useState, useEffect, useContext } from 'react';
import { getTop } from '../spotify';
import { shuffleArray } from '../utils.js'
import data from '../../../data.js';
import axios from 'axios';
// import { SpotifyApiContext } from 'react-spotify-api'

export const SpotifyContext = React.createContext();

const SpotifyProvider = ({ children }) => {




  const [soundSlider, setSoundSlider] = useState([0, 100]);
  const [avatar, setAvatar] = useState(null);
  const [musicList, setMusicList] = useState(data.albums.items);
  // const [musicList, setMusicList] = useState([data.albums.items[0]]);
  // const [musicList, setMusicList] = useState([]);
  const [next, setNext] = useState(window.location);



  React.useEffect(() => {
    var results = [];
    getTop('artists', {limit: 50})
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then(success => {
        results = success.items
        setNext(success.next)
        console.log(success.next, 'next', success, 'success')
        return success
      })
      .catch(err => {
        console.error(err, 'Spotify GET request failed')
        results = musicList;
      })
      .finally(list => setMusicList(results))

  }, [])


  const value = {
    avatar,
    setAvatar,
    musicList,
    setMusicList,
    shuffleArray,
    soundSliders: {},
    soundSlider,
    setSoundSlider
  };

  return (
    <SpotifyContext.Provider value={value}>
      {children}
    </SpotifyContext.Provider >
  )
}

export default SpotifyProvider;
