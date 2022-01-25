import React, { Suspense, useContext } from 'react';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './SpotifyAPIContext.jsx';
import SpotifyProvider from './SpotifyProvider.jsx';
import AppHeader from './AppHeader.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import AlbumGrid from './AlbumGrid.jsx';

import { Button } from '@mantine/core';


const App = () => {

  return (
    <div id='app'>
      <Login />
      {/* <SpotifyAPIContext> */}
        <SpotifyProvider>
          <Suspense fallback={<></>}>
            <AppShell header={<AppHeader />}>
              <Suspense fallback={<></>}>
                <AlbumGrid />
                <a href='/login'><h1>LOGIN</h1></a>
                <br />
                <a href='/'><h1>HOME</h1></a>
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
