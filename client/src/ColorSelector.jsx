import React, { useState, useContext } from 'react';
import { HueSlider, Title, useMantineTheme, Button, Group, Slider, Center } from '@mantine/core';
import SlidersDrawer from './SlidersDrawer.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';


const ColorSelector = (props) => {

  const [value, setValue] = useState(300);

  let {slider, setSlider} = React.useContext(SpotifyContext)

  return (
    <Group direction='column' position='apart'>
      <HueSlider value={slider} onChange={setSlider} size="xl" />
      <SlidersDrawer />
    </Group>
  )
};

export default ColorSelector;