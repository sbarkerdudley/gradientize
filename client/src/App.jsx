import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './components/SpotifyAPIContext';
import SpotifyProvider from './components/SpotifyProvider';
import AppHeader from './components/AppHeader';
import Login from './components/Login';
import ScrollButton from './components/ScrollButton';
import Gradient from './components/Gradient';
import Footer from './components/Footer';
import AlbumGrid from './components/AlbumGrid';

import { Button } from '@mantine/core';


const App = () => {
  return (
    <div id='app'>
      <MantineProvider withGlobalStyles theme={{ colorScheme: 'dark' }} >
        <SpotifyAPIContext>
          <SpotifyProvider>
                <ScrollButton />
              <Suspense fallback={<Gradient />}>
                <AppShell header={<AppHeader />}>

                  <Suspense fallback={<Gradient />}>
                    <AlbumGrid />

                  </Suspense>

                </AppShell>
                <Footer />
              </Suspense>
          </SpotifyProvider>
        </SpotifyAPIContext>
      </MantineProvider >
    </div>
  );
};

export default App;
