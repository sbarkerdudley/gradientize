import React from 'react';
import { MantineProvider } from '@mantine/core';
import { makeHSLAGradients, makeOffsetHSLAGradients, shuffleArray } from './utils.js'
import data from '../../data.js';

export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {

  // Random HSLA Hue on page load

  let theme = {
      colorScheme: 'dark',
      'user-select': 'none'
    },
    [slider, setSlider] = React.useState(Math.floor(Math.random() * 360)),
    values = [slider, slider + 40, slider + 80],
    value = {
      primaryGradient: makeHSLAGradients(values),
      secondaryGradient: makeOffsetHSLAGradients(values, 120),
      tertiaryGradient: makeOffsetHSLAGradients(values, 240),
      slider,
      setSlider,
      albumsList: data.albums.items,
      shuffleArray
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
