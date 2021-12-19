import React from 'react';
import { AppShell } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext.jsx';
import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, { SpotifyContext } from './SpotifyProvider.jsx';
import { TypographyStylesProvider } from '@mantine/core';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }} />
    </TypographyStylesProvider>
  );
}

const App = () => {
  return (
    <SpotifyAPIContext children={
      <SpotifyProvider>
        <AppShell header={<AppHeader />}>
          <AlbumGrid />
        </AppShell>
      </SpotifyProvider>
    }>
    </SpotifyAPIContext>
  );
}


export default App;