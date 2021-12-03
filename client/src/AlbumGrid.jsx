import React from 'react';
import { Button, Grid, Col } from '@mantine/core';
import Album from './Album.jsx';
import data from '../../data.js';


const AlbumGrid = () => {
  let colSpan = 3
  let gutter = 'md'

  return (
    <Grid grow gutter={gutter}>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
    <Col span={colSpan}><Album img={''} album={{}}/></Col>
  </Grid>
  )
}


export default AlbumGrid;