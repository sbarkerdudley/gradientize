import React from 'react';
import { Button, Grid, Col, Transition } from '@mantine/core';
import Album from './Album.jsx';
import data from '../../data.js';


const AlbumGrid = () => {
  let colSpan = 3
  let gutter = 'md'

  return (
    <Grid grow gutter={gutter}>
      {/* <Transition
        mounted={ true }
        transition='fade'
        duration={400}
        timingFunction='ease'
      > */}

        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
        <Col span={colSpan}><Album img={''} album={{}} /></Col>
      {/* </Transition> */}
    </Grid>
  )
}


export default AlbumGrid;