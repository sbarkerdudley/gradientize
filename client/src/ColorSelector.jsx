import React, { useContext } from 'react';
import { HueSlider } from '@mantine/core';
import { SpotifyContext, ColorContext } from './SpotifyProvider.jsx';


const ColorSelector = (props) => {

  const height = 60;
  let { slider, setSlider } = useContext(SpotifyContext);
  // let { slider, setSlider } = useContext(ColorContext);

  return (
    <HueSlider
      value={slider}
      onChange={setSlider}
      size="xl"
      style={{ height, cursor: 'pointer' }}
      styles={(theme) => ({
        thumb: {
          height
        }
      })}
    />
  )
};

export default React.memo(ColorSelector);