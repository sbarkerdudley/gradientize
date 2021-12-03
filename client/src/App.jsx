import React from 'react';
import { Button, AppShell } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import Album from './Album.jsx';
import AlbumGrid from './AlbumGrid.jsx';

const App = () => {
  return (
    <div className="App">

      <AppShell>

      <nav className="nav">
        Navigation Bar
        <div><ColorSelector /></div>
        <Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Select Album</Button>
      </nav>
      <main>
        <AlbumGrid>
        </AlbumGrid>
      </main>
      </AppShell>
    </div>
  );
}

export default App;