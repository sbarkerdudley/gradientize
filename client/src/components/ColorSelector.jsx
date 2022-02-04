import React, { useContext } from 'react';
import { HueSlider } from '@mantine/core';
import {
  ColorContext,
  ColorProvider,
} from './';


const ColorSelector = (props) => {

  const height = 60;
  let { slider, setSlider } = useContext(ColorContext);

  console.log(slider);

  return (
    <ColorProvider>
      <HueSlider
        value={slider}
        onChange={setSlider}
        size="xl"
        style={{ height, cursor: 'pointer' }}
        styles={(theme) => ({
          thumb: {
            height: (height - 2),
          }
        })}
      />
    </ColorProvider>
  )
};

export default React.memo(ColorSelector);