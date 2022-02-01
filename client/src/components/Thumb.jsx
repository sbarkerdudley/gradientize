import React from 'react';
import { Card, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';

export default function Thumb(props) {
  let { img } = props
  const { hovered, ref } = useHover();
  let hoverEffect = hovered ? { filter: 'brightness(1.15)' } : {}
  return (
    <Card
      ref={ref}
      onClick={() => console.log(props.img)}
      sx={{
        boxSizing: 'content-box',
        display: 'block',
        width: '64px',
        aspectRatio: '1',
        margin: 0,
        padding: 0,
        border: '3px solid rgba(255, 255, 255, 0.5)',
        ...hoverEffect,
      }}
    >
      {/* <Card.Section> */}
        {(img) && (<Image src={img} />)}
      {/* </Card.Section> */}
    </Card>
  )
}