import React from 'react';
import { Button, Grid, Col, Transition } from '@mantine/core';
import Album from './Album.jsx';
import data from '../../data.js';


const AlbumGrid = (props) => {
  let colSpan = 3
  let gutter = 'md'

  let AlbumComponents = data.albums.items.map(album => {
    return <Col span={colSpan}><Album {...{album}} /></Col>
    // <Col span={12} md={6} lg={3}>4</Col>
  })

  return (
    <Grid gutter={gutter}>
      {props.children }
      {AlbumComponents}
    </Grid>
  )
}


export default AlbumGrid;