import React from 'react';
import { Header, Button, Group, Center } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';


const AppHeader = () => {
  let
    gradient = {from: '#00000', to: '#ffee00', deg: 60},
    radius = 'lg'

  return (
    <Header height={300} padding={0} >
      <ColorSelector />
    </Header>
  );
}



export default AppHeader;