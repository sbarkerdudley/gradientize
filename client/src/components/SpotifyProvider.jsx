import React, { useState, useEffect, useContext } from 'react';
import { MantineProvider } from '@mantine/core';
import { makeHSLAGradients, makeOffsetHSLAGradients, shuffleArray } from '../utils.js'
import data from '../../../data.js';
import axios from 'axios';
import { SpotifyApiContext } from 'react-spotify-api'

export const SpotifyContext = React.createContext();
export const ColorContext = React.createContext({});

const SpotifyProvider = ({ children }) => {



  let [slider, setSlider] = React.useState(Math.floor(Math.random() * 360));
  let [soundSlider, setSoundSlider] = useState([40, 60]);
  let [avatar, setAvatar] = useState(null);
  let [albumsList, setAlbumsList] = useState(data.albums.items);
  // let [albumsList, setAlbumsList] = useState([]);


  const getValues = () => Array(6).fill(slider).map((value, i) => value += 30 * i);
  let values = getValues()

  const colors = {
    slider,
    setSlider,
    values,
    primaryGradient: makeHSLAGradients(values),
    secondaryGradient: makeOffsetHSLAGradients(values, 120),
    tertiaryGradient: makeOffsetHSLAGradients(values, 240),
  }



  const theme = { colorScheme: 'dark' };

  const primaryGradient = makeHSLAGradients(values);
  const secondaryGradient = makeOffsetHSLAGradients(values, 120);
  const tertiaryGradient = makeOffsetHSLAGradients(values, 240);

  React.useEffect(() => {
    if (typeof slider === 'number') {
      colors.slider = slider;
      colors.values = getValues()
      values = getValues();
      colors.primaryGradient = makeHSLAGradients(values);
      colors.secondaryGradient = makeOffsetHSLAGradients(values, 120);
      colors.tertiaryGradient = makeOffsetHSLAGradients(values, 240);
    }
  }, [slider])


  const value = {
    slider,
    setSlider,
    avatar,
    setAvatar,
    albumsList,
    setAlbumsList,
    shuffleArray,
    soundSliders: {},
    soundSlider,
    setSoundSlider
  };

  return (
    <SpotifyContext.Provider value={value}>
      <ColorContext.Provider value={colors}>
        {children}
      </ColorContext.Provider>
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider;
