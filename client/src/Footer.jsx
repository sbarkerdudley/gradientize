import React from 'react';
import { Header, Group } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';

const Footer = () => {

  return (
    <Header
      padding={'xs'}
      sx={{
        top: '100vh',
        transform: 'translate(0, -100%)',
        position: 'fixed',
        paddingBottom: '1rem',
        padding: '1rem',
        margin: '0 auto',
        opacity: '95%'
      }}
    >
      <Group
        grow
        direction='column'
        position='apart'
      >
        <ColorSelector />
      </Group>
    </Header>
  );
}

export default React.memo(Footer);
