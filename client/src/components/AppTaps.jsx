import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import { Tabs } from '@mantine/core';


export default function AppTabs() {

  return (
    <Tabs>
      <Link to='/top'>
        <Tabs.Tab label="Your Top Items" icon={'$'}>{{}}</Tabs.Tab>
      </Link>
      <Link to='/saved' element={<Gradient />}>
        <Tabs.Tab label="Settings" icon={'$'}>{{}}</Tabs.Tab>
      </Link>
      <Link to='/discover' element={<Login />}>
        <Tabs.Tab label='Discover' icon='$'>{{}}</Tabs.Tab>
      </Link>
    </Tabs>
  )
};
