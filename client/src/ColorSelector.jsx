import React, { useState, useContext } from 'react';
import { HueSlider, Title, useMantineTheme, MantineProvider, Button, Group, Slider, Center } from '@mantine/core';
import SlidersDrawer from './SlidersDrawer.jsx';


const ColorSelector = () => {
  const [sliderValue, onChange] = useState(250);
  let theme = useMantineTheme();


  return (
    <MantineProvider theme={{
      headings: { fontFamily: 'Greycliff CF, sans-serif' }
    }}>
      <Group direction='column' position='apart'>
        <Center>
          <Title order={2}>Select a Color</Title>
        </Center>
        <HueSlider value={sliderValue} onChange={onChange} thumbSize='xl' size="xl" />
        <SlidersDrawer methods={'randomize'}/>
      </Group>
    </MantineProvider>
  )
};

export default ColorSelector;