import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './components/SpotifyAPIContext';
import SpotifyProvider from './components/SpotifyProvider';
import AppHeader from './components/AppHeader';
import Login from './components/Login';
import Footer from './components/Footer';
import AlbumGrid from './components/AlbumGrid';

import { Button } from '@mantine/core';


const App = () => {
  return (
    <div id='app'>
      <SpotifyAPIContext>
      <SpotifyProvider>

        <Suspense fallback={<Login />}>
          <AppShell header={<AppHeader />}>`
            <Suspense fallback={<></>}>
              <AlbumGrid />
            </Suspense>
          </AppShell>
          <Footer />
        </Suspense>

      </SpotifyProvider>
      </SpotifyAPIContext>
    </div>
  );
};

export default App;
