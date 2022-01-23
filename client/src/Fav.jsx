import React from 'react';
import { ThemeIcon } from '@mantine/core';

const Fav = (props) => {
  return (
    <ThemeIcon
      radius="xl"
      size="xl"
      color="pink"
      style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        zIndex: 5,
        cursor: 'pointer'
      }}
      variant={props.variant}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};



export default React.memo(Fav);