import React, { useContext } from 'react';
import { HueSlider } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider.jsx';


const ColorSelector = (props) => {

  let { slider, setSlider } = useContext(SpotifyContext);
  let height = 60;

  return (
    <HueSlider
      value={slider}
      onChange={setSlider}
      size="xl"
      style={{ height: height, cursor: 'pointer' }}
      styles={(theme) => ({
        thumb: {
          height: height,
        }
      })}
    />
  )
};

export default React.memo(ColorSelector);