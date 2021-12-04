import React, { useState } from 'react';
import { Drawer, Button, Group, useMantineTheme } from '@mantine/core';
import { linearGradient } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'
import { SpotifyContext } from './SpotifyProvider.jsx';
import convert from 'color-convert';

const SlidersDrawer = (props) => {
  const [opened, setOpened] = useState(false);

  let {slider, setSlider} = React.useContext(SpotifyContext)


  let gradient = {
    from: slider,
    to: 'pink',
    deg: 135,
  }
  
  let [contextGradient, setContextGradient] = React.useState(gradient)

  console.log()

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size={'50%'}
        position='bottom'
        title={props.title}
        padding="xl"
      >
        <SlidersContainer />
      </Drawer>

      <Group position="apart" direction='column'>
        <Button
          variant='gradient'
          gradient={contextGradient}
          radius='xl'
          size='xl'
          onClick={() => setOpened(!opened)}>Gradient</Button>
        <Button
          variant='gradient'
          gradient={gradient}
          radius='xl'
          size='xl'
          onClick={() => setOpened(!opened)}>Randomize Sound Characteristics</Button>
      </Group>
    </>
  );
};

export default SlidersDrawer;