import React from 'react';
import { Header, Group, Grid } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import SlidersDrawer from './SlidersDrawer.jsx';
import UserAvatar from './UserAvatar.jsx';


const AppHeader = () => (
  <Header
    padding={'xs'}
    sx={{
      outline: 0,
      border: 'none',
      position: 'sticky',
      top: 0,
      opacity: '95%',
      // paddingBottom: '2rem',
      // padding: '1rem',
      // margin: '0 auto',
    }}
  >
    <Group
      grow
      direction='column'
      position='apart'
    >
      <SlidersDrawer />
    </Group>
  </Header>
);




export default React.memo(AppHeader);