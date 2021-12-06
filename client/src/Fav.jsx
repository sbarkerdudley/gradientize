import React from 'react';
import { ThemeIcon } from '@mantine/core';
import { useMantineTheme } from '@mantine/styles';


const Fav = (props) => {
  let theme = useMantineTheme()
  return (
    <ThemeIcon
      radius="xl"
      size="xl"
      color="pink"
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        zIndex: 5,
        cursor: 'pointer'
      }}
      variant={props.variant}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};



export default Fav;