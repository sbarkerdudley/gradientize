import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { AppShell, Tabs } from '@mantine/core';
import {
  AppHeader,
  ScrollButton,
  Footer,
  Resource,
} from './';
import { Spotify } from '../spotify'

export default function AppContainer({ children }) {
  return (
    <>
      <AppShell header={<AppHeader />}>
        {children}
        <ScrollButton />
      </AppShell>
      <Footer />
    </>
  );
};

