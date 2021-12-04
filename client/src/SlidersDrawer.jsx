import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import SlidersContainer from './SlidersContainer.jsx'

const SlidersDrawer = (props) => {
  const [opened, setOpened] = useState(false);

  let gradient = {
    from: 'orange',
    to: 'grape',
    deg: 135,
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size={'40%'}
        position='bottom'
        title={props.title}
        padding="xl"
      >
        <SlidersContainer />
      </Drawer>

      <Group position="center">
        <Button
          variant='gradient'
          gradient={gradient}
          radius='xl'
          onClick={() => setOpened(!opened)}>Randomize Sound Characteristics</Button>
      </Group>
    </>
  );
};

export default SlidersDrawer;