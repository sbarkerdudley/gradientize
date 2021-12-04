import React from 'react';

export const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {

  let [slider, setSlider] = React.useState(99);
  return (
    <SpotifyContext.Provider value={{slider, setSlider}}>
      { props.children }
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider;