import React, { useState } from 'react';
import { Drawer, Button, Col, Group, Title, Space } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'
import { SpotifyContext } from './SpotifyProvider.jsx';
import { ButtonGenerator } from './Buttons.jsx';
import { shuffleArray } from './utils.js';


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  let { slider, setSlider, primaryGradient, secondaryGradient, tertiaryGradient, albumsList, setAlbumsList, values } = React.useContext(SpotifyContext)

  let randomize = () => {
    toggleDrawer()
    return setSlider(Math.floor(Math.random() * slider))
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size='350px'
        position='bottom'
        title={props.title}
        padding='xl'
      >
        <SlidersContainer />
      </Drawer>

      <Group padding='sm' direction='row' position='apart' grow>
        <Button
          style={{ background: primaryGradient }}
          radius='xl'
          size='xl'
          onClick={toggleDrawer}>{'Randomize'}
        </Button>
        <Button
          style={{ background: tertiaryGradient }}
          radius='xl'
          size='xl'
          onClick={toggleDrawer}>{'Set Sliders By Hue'}
        </Button>
      </Group>
      <Group position='apart' grow>
        <Button
          style={{ background: secondaryGradient }}
          radius='xl'
          size='xl'
          onClick={() => setAlbumsList(shuffleArray(albumsList))}>{'Generate Recommendations'}
        </Button>
      </Group>
    </>
  );
};

export default React.memo(SlidersDrawer);