import React, { useState, useEffect, useContext } from 'react';
import { Card } from '@mantine/core';

const CardBody = ({ children }) => {

  const sx = {
    willChange: 'transform',
    // aspectRatio: '1'
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
