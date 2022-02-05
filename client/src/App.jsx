import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import {
  SpotifyAPIProvider,
  SpotifyProvider,
  ColorProvider,
  AlbumGrid,
  Login,
  AppHeader,
  ScrollButton,
  Gradient,
  Footer,
  SearchProvider,
  StyleProvider
} from './components';




const App = () => {
  return (
    <div id='app'>
      <AppShell header={<AppHeader />}>
        {/* <Link to='/profile'>Test</Link> */}
        {/* <Link to='/logout' element={<Gradient />}>Gradient</Link> */}
        {/* <Link to='/login' element={<Login />}>Login</Link> */}
        <AlbumGrid />
        <ScrollButton />
      </AppShell>
      {/* <Gradient /> */}
      <Footer />
    </div>
  );
};

export default App;

