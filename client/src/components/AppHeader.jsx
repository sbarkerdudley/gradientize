import React, { Suspense } from 'react';
import { Header, Group, Grid } from '@mantine/core';
import ColorSelector from './ColorSelector';
import Seeds from './Seeds';
import SlidersDrawer from './SlidersDrawer';
const UserAvatar = React.lazy(() => import('./UserAvatar'));
import { LogOutButton } from './Buttons';

export function Nav(props) {
  return (
    <Header
      padding={'xs'}
      sx={{
        outline: 0,
        border: 'none',
        opacity: '80%',
        margin: '0 auto',
        ...props.sx,
      }}
    >
      {props.children}
    </Header >
  )
}


export default function AppHeader() {
  return (
    <Nav
      sx={{
        position: 'sticky',
        top: 0,
        margin: '0 auto',
      }}
    >
      <Group
        grow
        direction='row'
        position='apart'
      >
        <Seeds />
        <SlidersDrawer />
        <LogOutButton />
        <UserAvatar />
      </Group>
    </Nav>
  );
}
