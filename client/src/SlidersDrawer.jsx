import React, { useState, useContext } from 'react';
import { Drawer, Button, Col, Group, Title, Space } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'
import { SpotifyContext, ColorContext } from './SpotifyProvider.jsx';
import { ButtonGenerator } from './Buttons.jsx';
import { shuffleArray } from './utils.js';


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  let {
    slider,
    setSlider,
    albumsList,
    setAlbumsList,
  } = useContext(SpotifyContext)

  let {
    primaryGradient,
    secondaryGradient,
    tertiaryGradient,
  } = useContext(ColorContext)

  let randomize = () => {
    toggleDrawer()
    // return setSlider(Math.floor(Math.random() * slider))
    // return setSlider(slider)
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
          size='md'
          onClick={toggleDrawer}>{'Randomize'}
        </Button>
        <Button
          style={{ background: tertiaryGradient }}
          radius='xl'
          size='md'
          onClick={toggleDrawer}>{'Set Sliders By Hue'}
        </Button>
      <Button
        style={{ background: secondaryGradient }}
        radius='xl'
        size='md'
        onClick={() => setAlbumsList(shuffleArray(albumsList))}>{'Generate Recommendations'}
      </Button>
      </Group>
      {/* <Group position='apart' grow>
        <Button
          style={{ background: secondaryGradient }}
          radius='xl'
          size='md'
          onClick={() => setAlbumsList(shuffleArray(albumsList))}>{'Generate Recommendations'}
        </Button>
      </Group> */}
    </>
  );
};

export default React.memo(SlidersDrawer);