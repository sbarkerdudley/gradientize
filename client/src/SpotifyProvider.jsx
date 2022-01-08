import React, { useState, useEffect, useContext } from 'react';
import { MantineProvider } from '@mantine/core';
import { makeHSLAGradients, makeOffsetHSLAGradients, shuffleArray } from './utils.js'
import data from '../../data.js';
import { SpotifyApiContext } from 'react-spotify-api'

export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {

  let { token } = useContext(SpotifyApiContext)

  let theme = { colorScheme: 'dark' }
  let [slider, setSlider] = React.useState(Math.floor(Math.random() * 360))
  let [soundSlider, setSoundSlider] = useState(50)
  let [albumsList, setAlbumsList] = useState(data.albums.items)
  let hues = Array(6).fill(slider).map((v, i) => v += 30 * i)
  let value = {
      primaryGradient: makeHSLAGradients(hues),
      secondaryGradient: makeOffsetHSLAGradients(hues, 120),
      tertiaryGradient: makeOffsetHSLAGradients(hues, 240),
      slider,
      setSlider,
      albumsList,
      setAlbumsList,
      shuffleArray,
      soundSliders: {},
      soundSlider,
      setSoundSlider
    }

  return (
    <MantineProvider withGlobalStyles theme={theme} >
      <SpotifyContext.Provider value={value}>
        {props.children}
      </SpotifyContext.Provider>
    </MantineProvider>
  )
}

export default SpotifyProvider;
