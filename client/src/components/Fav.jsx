import React, { useState, useEffect } from 'react';
import { ThemeIcon } from '@mantine/core';
import { useHover } from '@mantine/hooks';

const Fav = (props) => {
  let { color, id, img } = props

  let { hovered, ref } = useHover();
  let hoverState = hovered ? { backgroundColor: 'red' } : { backgroundColor: 'pink' }

  const handleClick = () => {}

  return (
    <ThemeIcon
      ref={ref}
      radius="xl"
      size="xl"
      color={color ? color : 'red'}
      sx={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        zIndex: 5,
        cursor: 'pointer',
        ...hoverState,
      }}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};



export default React.memo(Fav);
