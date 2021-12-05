import React from 'react';
import { MantineProvider } from '@mantine/core';


export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {

  let [slider, setSlider] = React.useState(Math.floor(Math.random() * 360));
  return (
    <SpotifyContext.Provider value={{ slider, setSlider }}>
      <MantineProvider>
        {props.children}
      </MantineProvider>
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider;
