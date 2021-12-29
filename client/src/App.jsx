import React from 'react';
import { AppShell } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext.jsx';
import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, { SpotifyContext } from './SpotifyProvider.jsx';

const App = () => {
  return (
    <SpotifyAPIContext>
      <SpotifyProvider>
        <AppShell header={<AppHeader />}>
          <AlbumGrid />
        </AppShell>
      </SpotifyProvider>
    </SpotifyAPIContext>
  );
};


export default App;
