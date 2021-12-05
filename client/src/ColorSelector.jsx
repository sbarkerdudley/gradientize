import React, { useContext } from 'react';
import { HueSlider, Title, Group } from '@mantine/core';
import SlidersDrawer from './SlidersDrawer.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';


const ColorSelector = (props) => {

  let {slider, setSlider} = React.useContext(SpotifyContext)

  return (
    <Group direction='column' position='apart'>
      <HueSlider value={slider} onChange={setSlider} size="xl" />
      <SlidersDrawer />
    </Group>
  )
};

export default ColorSelector;