import React from 'react';
import { MantineProvider, AppShell} from '@mantine/core';
import AppHeader from './AppHeader.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, {SpotifyContext} from './SpotifyProvider.jsx';


const App = () => {
  let tertiaryGradient = React.useContext(SpotifyContext)

  return (
    <SpotifyProvider>
        <AppShell  style={{'background-image': tertiaryGradient}} header={<AppHeader />}>
          <AlbumGrid />
        </AppShell>
    </SpotifyProvider>
  );
}


export default App;