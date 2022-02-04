import React from 'react';
import { ThemeIcon } from '@mantine/core';


const Fav = (props) => {
  let { color, id, img } = props


  // let hoverState = hovered ? { backgroundColor: 'red' } : { backgroundColor: 'pink' }

  const handleClick = () => { }

  return (
    <ThemeIcon
      // ref={ref}
      radius="xl"
      size="xl"
      color={color ? color : 'red'}
      sx={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        zIndex: 5,
        cursor: 'pointer',
        backgroundColor: 'pink',
        '&:hover': {
          backgroundColor: 'red',
        }
      }}
      onClick={props.handleClick}>
      {props.children}
    </ThemeIcon>
  );
};


export default Fav;
