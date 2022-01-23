import React from 'react';
import { Grid, Col } from '@mantine/core';
import SliderGenerator from './SliderGenerator.jsx';

const SlidersContainer = () => (
  <Grid gutter={'md'} >
    <Col span={6}>
      <SliderGenerator color={'pink'} label={'Tempo'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'teal'} label={'Energy'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'orange'} label={'Danceability'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'cyan'} label={'Loudness'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'yellow'} label={'Instrumentalness'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'blue'} label={'Acousticness'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'lime'} label={'Cheerfulness'} />
    </Col>
    <Col span={6}>
      <SliderGenerator color={'grape'} label={'Vocality'} />
    </Col>
  </Grid>
);

export default React.memo(SlidersContainer);
