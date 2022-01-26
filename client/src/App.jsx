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
      <Login />
      {/* <SpotifyAPIContext> */}
      <SpotifyProvider>

        <Suspense fallback={<></>}>
              <a href='/login'><h1>LOGIN</h1></a>
          <AppShell header={<AppHeader />}>`
            <Suspense fallback={<></>}>
              <AlbumGrid />
            </Suspense>x
          </AppShell>
          <Footer />
        </Suspense>

      </SpotifyProvider>
      {/* </SpotifyAPIContext> */}
    </div>
  );
};

export default App;
