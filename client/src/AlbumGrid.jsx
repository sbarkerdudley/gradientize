import React from 'react';
import { Button, Grid, Col, Transition } from '@mantine/core';
import Album from './Album.jsx';
import data from '../../data.js';


const AlbumGrid = (props) => {
  let colSpan = 4
  let gutter = 'md'

  let AlbumComponents = data.albums.items.map(album => {
    return <Col span={colSpan}><Album {...{album}} /></Col>
  })

  return (
    <Grid grow gutter={gutter}>
      {props.children }
      {AlbumComponents}
    </Grid>
  )
}


export default AlbumGrid;