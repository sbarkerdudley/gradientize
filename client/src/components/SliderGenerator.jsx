import React from 'react';
import { RangeSlider, Group, Text, Switch, Center } from '@mantine/core';
import { randomSliderValues, randomSliderValue, sliderMarks } from '../utils'
import { SpotifyContext } from './SpotifyProvider';


const SliderGenerator = (props) => {

  const name = props.label.toLowerCase();

  var { soundSliders, soundSlider, setSoundSlider } = React.useContext(SpotifyContext);

  var updateSlider = (e) => {
    console.log(e);
    console.log(name);
    console.log(soundSliders);
    setSoundSlider(soundSliders[name] = e)
  }
  // soundSliders[name] = e.target.value

  return (
    <>
      <Center>
        <Text
          size='md'
          weight={700}
          style={{ color: props.color }}
        >
          {props.label}
        </Text>
      </Center>
      <RangeSlider
        onChange={updateSlider}
        size='xl'
        radius="xl"
        sx={{width: 'auto'}}
        marks={sliderMarks}
        labelTransition="fade"
        labelTransitionDuration={400}
        labelTransitionTimingFunction="ease"
        step={5}
        min={0}
        max={100}
        // value={randomSliderValues}
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

export default React.memo(SliderGenerator);