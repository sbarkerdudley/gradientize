// import './style.css';
import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext.jsx';
import AppHeader from './AppHeader.jsx';
import Footer from './Footer.jsx';
import AlbumGrid from './AlbumGrid.jsx';
import SpotifyProvider, { SpotifyContext } from './SpotifyProvider.jsx';

const App = () => {
  if (document !== undefined) {
    document.title = 'Hello World';
  }

  return (
    <div id='app'>
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
}

export default App;
