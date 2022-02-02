import React from 'react';
import { Header, Group } from '@mantine/core';
import { Nav } from './AppHeader';
import ColorSelector from './ColorSelector.jsx';

const Footer = () => {

  return (
    <Nav sx={{
      top: '100vh',
      transform: 'translate(0, -100%)',
      position: 'fixed',
      paddingBottom: '1rem',
      zIndex: 10,
    }}>
      <Group
        grow
        direction='column'
        position='apart'
      >
        <ColorSelector />
      </Group>
    </Nav>

  );
}

export default React.memo(Footer);
