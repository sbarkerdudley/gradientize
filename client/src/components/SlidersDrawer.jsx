import React, { useState, useContext } from 'react';
import { Drawer, Button, Col, Group, Title, Space } from '@mantine/core';
import SlidersContainer from './SlidersContainer'
import { SpotifyContext, ColorContext } from './SpotifyProvider';
import { ButtonGenerator } from './Buttons';
import { shuffleArray } from '../utils';


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  const {
    slider,
    setSlider,
    albumsList,
    setAlbumsList,
  } = useContext(SpotifyContext)

  const {
    primaryGradient,
    secondaryGradient,
    tertiaryGradient,
  } = useContext(ColorContext)

  const randomize = () => {
    toggleDrawer()
    // return setSlider(Math.floor(Math.random() * slider))
    // return setSlider(slider)
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // size='350px'
        sx={{
          marginBottom: '2rem',
          // height: '100%'
        }}
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
          onClick={toggleDrawer}>{'Set Mood'}
        </Button>
        <Button
          style={{ background: secondaryGradient }}
          radius='xl'
          size='md'
          onClick={() => setAlbumsList(shuffleArray(albumsList))}>{'Shuffle'}
        </Button>
      </Group>
    </>
  );
};

export default React.memo(SlidersDrawer);