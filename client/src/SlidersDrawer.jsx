import React, { useState } from 'react';
import { Drawer, Button, Group, useMantineTheme } from '@mantine/core';
import { linearGradient } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'
import { SpotifyContext } from './SpotifyProvider.jsx';
import { makeHSLAGradients, makeOffsetHSLAGradients } from './utils.js'



const SlidersDrawer = (props) => {
  const [opened, setOpened] = useState(false);

  let { slider, setSlider } = React.useContext(SpotifyContext)

  let values = [slider, slider+120, slider+240]


  let gradient = {
    from: slider,
    to: 'pink',
    deg: 135,
  }

  let [contextGradient, setContextGradient] = React.useState(gradient)

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

      <Group position="apart" direction='row'>
        <Button
          // variant='gradient'
          // gradient={contextGradient}
          style={{ background: makeHSLAGradients(values) }}
          radius='xl'
          size='xl'
          onClick={() => setOpened(!opened)}>Gradient</Button>
        <Button
          style={{ background: makeOffsetHSLAGradients(values) }}
          radius='xl'
          size='xl'
          onClick={() => setOpened(!opened)}>Randomize Sound Characteristics</Button>
      </Group>
    </>
  );
};

export default SlidersDrawer;