import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { makeHSLAGradients, makeOffsetHSLAGradients, shuffleArray } from './utils.js'
import data from '../../data.js';

export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {

  // Random HSLA Hue on page load

  let theme = { colorScheme: 'dark' },
    [slider, setSlider] = React.useState(Math.floor(Math.random() * 360)),
    [soundSlider, setSoundSlider] = useState(50),
    [albumsList, setAlbumsList] = useState(data.albums.items),
    values = Array(6).fill(slider).map((v, i) => v += 30 * i),
    value = {
      primaryGradient: makeHSLAGradients(values),
      secondaryGradient: makeOffsetHSLAGradients(values, 120),
      tertiaryGradient: makeOffsetHSLAGradients(values, 240),
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
