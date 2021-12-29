import React from 'react';
import { Grid, Col } from '@mantine/core';
import { SliderGenerator } from './SliderGenerator.jsx';

const SlidersContainer = () => {
  let colSpan = 6

  return (
    <Grid gutter={'md'} >
      <Col span={colSpan}>
        <SliderGenerator color={'pink'}   label={'Tempo'}/>
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'teal'}   label={'Energy'}/>
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'orange'} label={'Danceability'}/>
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'cyan'}   label={'Loudness'}/>
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'yellow'} label={'Instrumentalness'}/>
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'blue'}   label={'Acousticness'} />
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'lime'}   label={'Cheerfulness'} />
      </Col>
      <Col span={colSpan}>
        <SliderGenerator color={'grape'}  label={'Vocality'} />
      </Col>
  </Grid>
  )
}


export default SlidersContainer
