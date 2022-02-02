import React, { useState, useEffect, useContext } from 'react';
import { Card } from '@mantine/core';

const CardBody = ({ children }) => {

  const sx = {
    aspectRatio: '1 / 1',
    willChange: 'transform',
    perspective: '2rem',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    transition: 'transform(300ms)'
  }

  return (
    <Card.Section
      sx={sx}
      radius='md'
    >
      {children}
    </Card.Section>
  )
}

export default CardBody;
