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
    albumsList, // move this
    setAlbumsList, // move this
  } = useContext(SpotifyContext)

  const {
    primaryGradient,
    secondaryGradient,
    tertiaryGradient,
  } = useContext(ColorContext)



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
          onClick={() => setAlbumsList(shuffleArray(albumsList))}>{'Shuffle'}
        </Button>
      </Group>
    </>
  );
};

export default React.memo(SlidersDrawer);