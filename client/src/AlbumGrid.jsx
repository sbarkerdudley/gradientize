import React from 'react';
import { Button, Grid, Transition } from '@mantine/core';
import Album from './Album.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';


const AlbumGrid = () => {

  let { albumsList, setAlbumsList } = React.useContext(SpotifyContext)

  let AlbumComponents = React.useMemo(() => {
    return albumsList.map((album, i) => {
      return (
        <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={i}>
          <Album {...{ album }} />
        </Grid.Col>
      )
    })}, [albumsList])

  return (
    <Grid span={12} gutter={'xl'}>
      {AlbumComponents}
    </Grid>
  )
}

export default AlbumGrid;
