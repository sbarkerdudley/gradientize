import React, { useState, useContext } from 'react';
import { Drawer, Button, Col, Group, Title, Space } from '@mantine/core';
import SlidersContainer from './SlidersContainer'
import { SpotifyContext } from './SpotifyProvider';
import { ColorContext } from './ColorProvider';
import { ButtonGenerator } from './Buttons';
import { shuffleArray } from '../utils';


const SlidersDrawer = (props) => {

  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => setOpened(!opened)

  const {
    musicList,
    setMusicList,
  } = useContext(SpotifyContext)

  const {
    slider,
    setSlider,
    primaryGradient,
    secondaryGradient,
    tertiaryGradient,
  } = useContext(ColorContext)



  return (
    <>
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

      <Group padding='sm' direction='row' grow position='apart'>
        <Button
          sx={{ background: primaryGradient }}
          radius='xl'
          size='md'
          onClick={toggleDrawer}>{'Randomize'}
        </Button>
        <Button
          sx={{ background: tertiaryGradient }}
          radius='xl'
          size='md'
          onClick={toggleDrawer}>{'Set Mood'}
        </Button>
        <Button
          sx={{ background: secondaryGradient }}
          radius='xl'
          size='md'
          onClick={() => setMusicList(musicList => shuffleArray(musicList))}>{'Shuffle'}
        </Button>
      </Group>
    </>
  );
};

export default SlidersDrawer;