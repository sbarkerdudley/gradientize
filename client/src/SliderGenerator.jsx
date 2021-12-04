import React from 'react';
import { Slider, RangeSlider, Center, Text } from '@mantine/core';

export const SliderGenerator = (props) => (
  <>
    <Center><Text size='sm' weight={700}>{props.label}</Text></Center>
    <Slider
      radius="xl"
      marks={[
        { value: 30 },
        { value: 50 },
        { value: 70 },
      ]}
      labelTransition="fade"
      labelTransitionDuration={300}
      labelTransitionTimingFunction="ease"
      step={10}
      min={0}
      max={100}
      defaultValue={50}
      color={props.color}
      thumb={{
        height: 40,
        width: 40
      }}
    />
  </>
)