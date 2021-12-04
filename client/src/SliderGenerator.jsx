import React from 'react';
import { Slider, RangeSlider, Center, Text } from '@mantine/core';

export const SliderGenerator = (props) => {

  var randomSliderValues = Array(2).fill().map(x => Math.floor(Math.random() * 20) * 5).sort()
  var randomSliderValue = Math.floor(Math.random() * 100)

  return (
    <>
      <Center><Text size='sm' weight={700}>{props.label}</Text></Center>
      <Slider
        radius="xl"
        marks={[
          { value: 25 },
          { value: 50 },
          { value: 75 },
        ]}
        labelTransition="fade"
        labelTransitionDuration={400}
        labelTransitionTimingFunction="ease"
        step={5}
        min={0}
        max={100}
        // defaultValue={randomSliderValues}
        defaultValue={randomSliderValue}
        color={props.color}
        thumb={{
          height: 40,
          width: 40
        }}
      />
    </>
  )
};