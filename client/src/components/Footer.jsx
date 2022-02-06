import React from 'react';
import { css, jsx } from '@emotion/react'

/** @jsx jsx */
import { Group } from '@mantine/core';
import {
  Nav,
  ColorSelector,
  ColorProvider,
} from './';



const Footer = () => {

  return (
    <ColorProvider>
    <Nav
    sx={{
      top: '100vh',
      transform: 'translate(0, -100%)',
      position: 'fixed',
      paddingBottom: '0.5rem',
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
    </ColorProvider>

  );
}

export default React.memo(Footer);
