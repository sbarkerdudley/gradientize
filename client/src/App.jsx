import React from 'react';
import { Button, Grid, Col } from '@mantine/core';
import ColorSelector from './ColorSelector.jsx';
import Album from './Album.jsx';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        Navigation Bar
        <div><ColorSelector /></div>
        <Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Select Album</Button>
      </nav>
      <main>
        <Grid>
          <Col span={3}>1</Col>
          <Col span={3}>2</Col>
          <Col span={3}>3</Col>
          <Col span={3}>4</Col>
        </Grid>
      </main>
    </div>
  );
}

export default App;