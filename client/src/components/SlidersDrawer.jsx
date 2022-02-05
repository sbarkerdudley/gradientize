import React, { useState, useContext } from 'react';
import { Drawer, Button, Col, Group, Title } from '@mantine/core';
import { shuffleArray } from '../utils';
import {
  SpotifyContext,
  ColorContext,
  ColorProvider,
  ButtonGenerator,
  SlidersContainer,
} from './'


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  const {
    musicList,
    setMusicList,
  } = useContext(SpotifyContext)

  const {
    // slider,
    // setSlider,
    primaryGradient,
    secondaryGradient,
    tertiaryGradient,
  } = useContext(ColorContext)



  return (
    <ColorProvider>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}

        sx={{
          marginBottom: '2rem',
          height: 'fit-content'
        }}
        position='bottom'
        title={props.title}
        padding='xl'
      >
        <SlidersContainer />
      </Drawer>

      <Group padding='sm' direction='row' grow >
        <Button
          sx={{ background: primaryGradient }}
          radius='xl'
          size='md'
          onClick={toggleDrawer}>
            {'Randomize'}
        </Button>
        <Button
          sx={{ background: tertiaryGradient }}
          radius='xl'
          size='md'
          onClick={toggleDrawer}>
            {'Set Mood'}
        </Button>
        <Button
          sx={{ background: secondaryGradient }}
          radius='xl'
          size='md'
          onClick={() => setMusicList(musicList => shuffleArray(musicList))}>
            {'Shuffle'}
        </Button>
      </Group>
    </ColorProvider>
  );
};

export default SlidersDrawer;