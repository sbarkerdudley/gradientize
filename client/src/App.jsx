import React from 'react';
import { MantineProvider, Button, AppShell, Slider, RangeSlider } from '@mantine/core';

import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';


const App = () => {
  return (
    <MantineProvider theme={{
      fontFamily: 'Greycliff CF, sans-serif'
    }}>
      <AppShell header={<AppHeader />}>
        <AlbumGrid />
      </AppShell>

    </MantineProvider>
  );
}

export default App;