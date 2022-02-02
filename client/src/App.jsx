import React, { Suspense } from 'react';
import theme from './styles/theme';
import { AppShell, MantineProvider } from '@mantine/core';
import SpotifyAPIContext from './components/SpotifyAPIContext';
import SpotifyProvider from './components/SpotifyProvider';
const AlbumGrid = React.lazy(() => import('./components/AlbumGrid'));
const AppHeader = React.lazy(() => import('./components/AppHeader'));
import ScrollButton from './components/ScrollButton';
import Gradient from './components/Gradient';
import Footer from './components/Footer';
import SearchProvider from './components/SearchProvider';




const App = () => {
  return (
    <div id='app'>
      <MantineProvider withGlobalStyles {...{theme}} >
        <SpotifyAPIContext>
          <SpotifyProvider>
            <SearchProvider>
              <Suspense fallback={<Gradient />}>
                <AppShell header={<AppHeader />}>
                  <Suspense fallback={<Gradient />}>
                    <AlbumGrid />
                  </Suspense>
                </AppShell>
                <Footer />
              </Suspense>
              <ScrollButton />
            </SearchProvider>
          </SpotifyProvider>
        </SpotifyAPIContext>
      </MantineProvider >
    </div>
  );
};

export default App;
