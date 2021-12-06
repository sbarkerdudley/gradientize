import React from 'react';
import { Slider, RangeSlider, Center, Text } from '@mantine/core';
import { randomSliderValues, randomSliderValue, steps } from './utils.js'

export const SliderGenerator = (props) => {

  var randomSliderValues = Array(2).fill().map(x => Math.floor(Math.random() * 20) * 5).sort();
  var randomSliderValue = Math.floor(Math.random() * 100);
  var steps = Array(9).fill().map((x, i) => ({ value: (i + 1) * 10 }));

  return (
    <>
      <Center><Text size='md' weight={700} style={{ color: props.color }}>{props.label}</Text></Center>
      <RangeSlider
        size='xl'
        radius="xl"
        marks={steps}
        labelTransition="fade"
        labelTransitionDuration={400}
        labelTransitionTimingFunction="ease"
        step={5}
        min={0}
        max={100}
        // defaultValue={randomSliderValues}
        defaultValue={randomSliderValues}
        color={props.color}
        thumb={{
          height: 'xl',
          width: 'xl'
        }}
      />
    </>
  )
};