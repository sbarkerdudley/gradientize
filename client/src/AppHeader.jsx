import React from 'react';
import { Header, Button, Group, Center } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';


const AppHeader = () => {


  return (
    <Header height={150} padding={10} >
        <ColorSelector />
    </Header>
  );
}



export default AppHeader;