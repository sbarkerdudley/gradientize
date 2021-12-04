import React from 'react';
import { MantineProvider, Button, AppShell, Slider, RangeSlider } from '@mantine/core';
import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider from './SpotifyProvider.jsx';


const App = () => {

  return (
    <SpotifyProvider>
      <MantineProvider>
        <AppShell header={<AppHeader />}>
          <AlbumGrid />
        </AppShell>
      </MantineProvider>
    </SpotifyProvider>
  );
}

export default App;