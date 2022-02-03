import React, { useState, useEffect, useContext } from 'react';
import { makeHSLAGradients, makeOffsetHSLAGradients } from '../utils.js'

export const ColorContext = React.createContext({});

const SpotifyProvider = ({ children }) => {

  const [slider, setSlider] = React.useState(Math.floor(Math.random() * 255));

  const getValues = () => Array(6).fill(slider).map((value, i) => value += 30 * i);
  var values = getValues()

  const colors = {
    slider,
    setSlider,
    values,
    primaryGradient: makeHSLAGradients(values),
    secondaryGradient: makeOffsetHSLAGradients(values, 120),
    tertiaryGradient: makeOffsetHSLAGradients(values, 240),
  }

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


  return (
    <ColorContext.Provider value={colors}>

        {children}

    </ColorContext.Provider>
  )
}

export default SpotifyProvider;
