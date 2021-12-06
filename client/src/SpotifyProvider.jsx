import React from 'react';
import { MantineProvider } from '@mantine/core';
import { makeHSLAGradients, makeOffsetHSLAGradients } from './utils.js'

export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {


  // Random HSLA Hue on page load

  let theme = {
      colorScheme: 'dark'
    },
    [slider, setSlider] = React.useState(Math.floor(Math.random() * 360)),
    values = [slider, slider + 40, slider + 80],
    value = {
      primaryGradient: makeHSLAGradients(values),
      secondaryGradient: makeOffsetHSLAGradients(values, 120),
      tertiaryGradient: makeOffsetHSLAGradients(values, 240),
      slider,
      setSlider,
    }

  return (
    <MantineProvider theme={theme} withGlobalStyles>
      <SpotifyContext.Provider value={value}>
        {props.children}
      </SpotifyContext.Provider>
    </MantineProvider>
  )
}

export default SpotifyProvider;
