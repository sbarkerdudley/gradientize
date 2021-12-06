import React from 'react';
import { ThemeIcon } from '@mantine/core';


const Fav = (props) => {
  return (
    <ThemeIcon
      radius="xl"
      size="xl"
      color="red"
      style={{position:'absolute', 'bottom': '5px', 'right': '5px', 'z-index': 10}}
      variant={props.variant}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};



export default Fav;