import React, { useState, useEffect } from 'react';
import { ThemeIcon } from '@mantine/core';

const Fav = (props) => {
  let { color } = props

  return (
    <ThemeIcon
      radius="xl"
      size="xl"
      color={color ? color : 'red'}
      sx={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        zIndex: 5,
        cursor: 'pointer',
        // backgroundColor: color ? color : 'red',
      }}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};



export default React.memo(Fav);
