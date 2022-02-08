import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import {
  AlbumGrid,
  AppContainer,
  AppHeader,
  ScrollButton,
  Gradient,
  Resource,
} from './components';
import { Spotify } from './spotify'




const App = () => {
  return (
    <div id='app'>
      <AppContainer>
        <Resource
          action={Spotify.get.followedArtists}
          render={(state) => <AlbumGrid items={state} />}
          opts={{ limit: 30 }}
          path={''}
        />
        {/* <Resource
          action={Spotify.get.followedArtists}
          render={(state) => <AlbumGrid items={state.items} />}
          opts={{ limit: 30 }}
          path={''}
        /> */}

      </AppContainer>
      <ScrollButton />
    </div>
  );
};

export default App;

