import React from 'react';
import { Button, Grid, Col, Transition } from '@mantine/core';
import Album from './Album.jsx';
import { SpotifyContext } from './SpotifyProvider.jsx';


const AlbumGrid = (props) => {
  let colSpan = 12
  let gutter = 'md'
  let { albumsList, setAlbumsList } = React.useContext(SpotifyContext)

  let AlbumComponents =albumsList.map((album, i) => {
      return (
        <Col span={4} md={3} lg={2} key={i}>
          <Album {...{ album }} />
        </Col>
      )
    })

  return (
    <Grid gutter={gutter}>
      {AlbumComponents}
    </Grid>
  )
}


export default AlbumGrid;