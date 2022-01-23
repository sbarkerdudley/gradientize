import React from 'react';
import { Header, Button, Group, Center } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import SlidersDrawer from './SlidersDrawer.jsx';


const AppHeader = () => (
  <nav className='nav'>
  <Header padding={'xs'}>
    <Group
      grow
      direction='column'
      position='apart'
      >
      <ColorSelector />
      <SlidersDrawer />
    </Group>
  </Header>
      </nav>
);




export default React.memo(AppHeader);