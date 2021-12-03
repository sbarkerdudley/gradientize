import React, { useState, useContext } from 'react';
import { HueSlider, Text } from '@mantine/core';

const ColorSelector = () => {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text size={'lg'} weight={800}>Select a Color</Text>
      <HueSlider value={value} onChange={onChange} size="xl" />
    </>
  )
};

export default ColorSelector;