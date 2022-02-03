import React, { Suspense } from 'react';
import theme from './styles/theme';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './components/SpotifyAPIContext';
import SpotifyProvider from './components/SpotifyProvider';
import ColorProvider from './components/ColorProvider';
import AlbumGrid from './components/AlbumGrid';
import AppHeader  from './components/AppHeader';
import ScrollButton from './components/ScrollButton';
import Gradient from './components/Gradient';
import Footer from './components/Footer';
import SearchProvider from './components/SearchProvider';




const App = () => {
  return (
    <div id='app'>
      <MantineProvider withGlobalStyles theme={theme} >
        <SpotifyAPIContext>
          <SpotifyProvider>
          <ColorProvider>
            <SearchProvider>
              <AppShell header={<AppHeader />}>
                <Suspense fallback={<Gradient />}>
                  <AlbumGrid />
                </Suspense>
              </AppShell>
              <Footer />
              <ScrollButton />
            </SearchProvider>
          </ColorProvider>
          </SpotifyProvider>
        </SpotifyAPIContext>
      </MantineProvider >
    </div>
  );
};

export default App;
