import React, { useState, useContext } from 'react';
import { HueSlider, Title, useMantineTheme, MantineProvider, Button, Group, Slider, Center } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx';


const ColorSelector = () => {
  const [sliderValue, onChange] = useState(250);
  let theme = useMantineTheme();
  let gradient = {
    from: 'orange',
    to: 'grape',
    deg: 135,
  }

  return (
    <MantineProvider theme={{
      headings: { fontFamily: 'Greycliff CF, sans-serif' }
    }}>
      <Group direction='column' position='apart'>
        <Center>
          <Title order={2}>Select a Color</Title>
        </Center>
        <HueSlider value={sliderValue} onChange={onChange} size="xl" />
        <Button
          variant='gradient'
          gradient={gradient}
          radius='xl'
          onChange={onChange}>Randomize</Button>
        <SlidersContainer />
      </Group>
    </MantineProvider>
  )
};

export default ColorSelector;