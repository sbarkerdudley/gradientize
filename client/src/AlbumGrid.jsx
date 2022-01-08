import React, { Suspense, lazy } from 'react';
import { Button, Grid, Col } from '@mantine/core';
import Album from './Album.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';

const AlbumGrid = (props) => {
  let colSpan = 12;
  let gutter = 'md';
  let {albumsList} = React.useContext(SpotifyContext);

  let AlbumComponents = albumsList.map(album => {
    return <Col span={4} md={3} lg={2}><Album {...{album}} /></Col>
  })

  return (
    <Grid {...{gutter}} grow>
      <Suspense fallback={<h1>Albums Grid broke</h1>}>
        {AlbumComponents}
      </Suspense>
    </Grid>
  )
}

export default AlbumGrid;
