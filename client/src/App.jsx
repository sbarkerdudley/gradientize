import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext.jsx';
import SpotifyProvider from './SpotifyProvider.jsx';
import AppHeader from './AppHeader.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, { SpotifyContext } from './SpotifyProvider.jsx';

const App = () => {

  return (
    <div id='app'>
      <Login />
      {/* <MantineProvider theme={{}}> */}
        <SpotifyAPIContext>
          <SpotifyProvider>
            <Suspense fallback={<></>}>
              <AppShell header={<AppHeader />}>
                <Suspense fallback={<></>}>
                  <AlbumGrid />
                </Suspense>
              </AppShell>
              <Footer />
            </Suspense>
          </SpotifyProvider>
        </SpotifyAPIContext>
      {/* </MantineProvider> */}
    </div>
  );
};

export default App;
