import React, { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

const ColorSelector = () => {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Select a Color</Text>
      <HueSlider value={value} onChange={onChange} size="xl" />
    </>
  )
};

export default ColorSelector;