import React from 'react';
import { Grid, Col } from '@mantine/core';
import { SliderGenerator } from './SliderGenerator.jsx';

const SlidersContainer = () => {
  let colSpan = 6
  let gutter = 'md'

  return (
    <Grid gutter={gutter} >
      <Col span={colSpan}><SliderGenerator color={'grape'} label={'Tempo'}/></Col>
      <Col span={colSpan}><SliderGenerator color={'red'} label={'Loudness'}/></Col>
      <Col span={colSpan}><SliderGenerator color={'pink'} label={'Danceability'}/></Col>
      <Col span={colSpan}><SliderGenerator color={'orange'} label={'Energy'}/></Col>
      <Col span={colSpan}><SliderGenerator color={'green'} label={'Instrumentalness'}/></Col>
      <Col span={colSpan}><SliderGenerator color={'teal'} label={'Acousticness'} /></Col>
      <Col span={colSpan}><SliderGenerator color={'blue'} label={'Acousticness'} /></Col>
      <Col span={colSpan}><SliderGenerator color={'yellow'} label={'Acousticness'} /></Col>
  </Grid>
  )
}


export default SlidersContainer