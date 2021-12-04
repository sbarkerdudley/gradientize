import React from 'react';
import { Slider, RangeSlider, Center, Text } from '@mantine/core';

export const SliderGenerator = (props) => {

  var randomSliderValues = Array(2).fill().map(x => Math.floor(Math.random() * 20) * 5).sort()

  return (
    <>
      <Center><Text size='sm' weight={700}>{props.label}</Text></Center>
      <RangeSlider
        radius="xl"
        marks={[
          { value: 30 },
          { value: 50 },
          { value: 70 },
        ]}
        labelTransition="fade"
        labelTransitionDuration={300}
        labelTransitionTimingFunction="ease"
        step={5}
        min={0}
        max={100}
        // defaultValue={50}
        defaultValue={randomSliderValues}
        color={props.color}
        thumb={{
          height: 40,
          width: 40
        }}
      />
    </>
  )
};