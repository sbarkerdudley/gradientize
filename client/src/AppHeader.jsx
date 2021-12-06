import React from 'react';
import { Header, Button, Group, Center } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import SlidersDrawer from './SlidersDrawer.jsx';


const AppHeader = () => {


  return (
    <Header height={150} padding={10} >
      <Group direction='column' position='apart'>
      <ColorSelector />
      <SlidersDrawer />
      </Group>
    </Header>
  );
}



export default AppHeader;