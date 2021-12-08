import React from 'react';
import { Header, Button, Group, Center } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import SlidersDrawer from './SlidersDrawer.jsx';


const AppHeader = () => {
  let height = 240;


  return (
    <Header
      height={height}
      padding={10}
      style={{
        position: 'sticky',
        'background-color': 'rgba(0, 0, 0, 0.8)',
        width: '101%'}}>
      <Group direction='column' position='apart'>
      <ColorSelector />
      <SlidersDrawer />
      </Group>
    </Header>
  );
}



export default AppHeader;