import React from 'react';
import { Button, Grid, Col } from '@mantine/core';
import Album from './Album.jsx';


const AlbumGrid = () => {
  let colSpan = 3
  let gutter = 'md'

  return (
    <Grid grow gutter={gutter}>
    <Col span={colSpan}><Album/></Col>
    <Col span={colSpan}><Album/></Col>
    <Col span={colSpan}><Album/></Col>
    <Col span={colSpan}><Album/></Col>
    <Col span={colSpan}><Album/></Col>
    <Col span={colSpan}><Album/></Col>
    {/* <Col span={colSpan}><Album/></Col> */}
  </Grid>
  )
}


export default AlbumGrid;