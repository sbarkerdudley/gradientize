import React, { useContext } from 'react';
import { HueSlider, Title, Group } from '@mantine/core';
import SlidersDrawer from './SlidersDrawer.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';


const ColorSelector = (props) => {

  let { slider, setSlider } = React.useContext(SpotifyContext);
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
          'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }
      })}
    />
  )
};

export default ColorSelector;