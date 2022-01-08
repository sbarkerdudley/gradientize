import React from 'react';
import { Slider, Group, Text, Switch } from '@mantine/core';
import { randomSliderValues, randomSliderValue, steps } from './utils.js'
import { SpotifyContext } from './SpotifyProvider.jsx';


export const SliderGenerator = ({label, color}) => {
  const randomSliderValue = Math.floor(Math.random() * 100);
  const marks = Array(9).fill().map((mark, i) => ({ value: (i + 1) * 10 }));
  const [checked, setChecked] = React.useState(true)

  const { soundSliders, soundSlider, setSoundSlider } = React.useContext(SpotifyContext);
  const updateSlider = () => setSoundSlider(soundSliders[label] = soundSlider)
  soundSliders[label] = randomSliderValue

  return (
    <>
      <Group position='apart'>
        <Text
          size='md'
          weight={700}
          style={{ color }}>
          {label}
        </Text>
        <Switch
          {...{color, checked}}
          onChange={e => setChecked(e.target.checked)}
        />
      </Group>
      <Slider
        onChange={updateSlider}
        size='xl'
        radius="xl"
        sx={{width: 'auto'}}
        marks={marks}
        labelTransition="fade"
        labelTransitionDuration={400}
        labelTransitionTimingFunction="ease"
        step={5}
        min={0}
        max={100}
        defaultValue={randomSliderValue}
        color={color}
        />
    </>
  )
};