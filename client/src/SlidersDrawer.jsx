import React, { useState } from 'react';
import { Drawer, Button, Col, Group } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'
import { SpotifyContext } from './SpotifyProvider.jsx';
import { ButtonGenerator } from './Buttons.jsx';


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  let { slider, setSlider, primaryGradient, secondaryGradient, tertiaryGradient, values } = React.useContext(SpotifyContext)

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size={'50%'}
        position='bottom'
        title={props.title}
        padding="sm"
      >
        <Group position='apart' grow>
        <Button
          style={{ background: secondaryGradient }}
          radius='xl'
          size='xl'
          onClick={toggleDrawer}>{'Generate Recommendations'}
        </Button>
        </Group>
        <SlidersContainer />
      </Drawer>

      <Group padding='sm' direction='row' position='apart' grow>
        <Button
          style={{ background: primaryGradient }}
          radius='xl'
          size='xl'
          onClick={toggleDrawer}>{'Randomize Search'}
        </Button>
        <Button
          style={{ background: tertiaryGradient }}
          radius='xl'
          size='xl'
          onClick={toggleDrawer}>{'Select Hue'}
        </Button>
      </Group>
    </>
  );
};

export default SlidersDrawer;