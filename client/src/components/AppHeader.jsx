import React from 'react';
import { Header, Group } from '@mantine/core';
import {
  ColorSelector,
  LogoutButton,
  Seeds,
  SlidersDrawer,
  UserAvatar,
} from './';


export function Nav(props) {
  return (
    <Header
      padding={'xs'}
      sx={{
        // outline: 0,
        // border: 'none',
        opacity: '80%',
        // margin: '0 auto',
        ...props.sx,
        '&>*': {
          opacity: '100%',
        }
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
      }}
    >
      <Group
        grow
        direction='row'
        position='apart'
      >
        <Seeds />
        <SlidersDrawer />
        <LogoutButton />
        <UserAvatar />
      </Group>
    </Nav>
  );
}
