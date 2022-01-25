import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext';
import SpotifyProvider from './SpotifyProvider';
import AppHeader from './AppHeader';
import Login from './Login';
import Footer from './Footer';
import AlbumGrid from './AlbumGrid';

import { Button } from '@mantine/core';


const App = () => {

  return (
    <div id='app'>
      <Login />
      {/* <SpotifyAPIContext> */}
      <SpotifyProvider>

        <Suspense fallback={<></>}>
              <a href='/login'><h1>LOGIN</h1></a>
          <AppShell header={<AppHeader />}>`
            <Suspense fallback={<></>}>
              <AlbumGrid />
            </Suspense>
          </AppShell>
          <Footer />
        </Suspense>

      </SpotifyProvider>
      {/* </SpotifyAPIContext> */}
    </div>
  );
};

export default App;
