import React from 'react';
import { MantineProvider, AppShell} from '@mantine/core';
import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, {SpotifyContext} from './SpotifyProvider.jsx';


const App = () => {
  let slider = React.useContext(SpotifyContext)

  return (
    <SpotifyProvider>
        <AppShell header={<AppHeader />}>
          <AlbumGrid />
        </AppShell>
    </SpotifyProvider>
  );
}


export default App;