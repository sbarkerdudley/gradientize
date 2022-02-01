import React, { useContext } from 'react';
import { Card, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SearchContext } from './SearchProvider';

export default function Thumb(props) {
  const { img, id, parent } = props
  const { seeds, useSeeds } = useContext(SearchContext);
  const { hovered, ref } = useHover();

  const handleClick = parent === 'seeds' ? useSeeds.splice : useSeeds.prepend

  let hoverEffect = hovered ? { filter: 'brightness(1.15)' } : {}

  return (
    <Card
      ref={ref}
      onClick={() => handleClick({ img, id })}
      sx={{
        boxSizing: 'content-box',
        display: 'block',
        width: '64px',
        aspectRatio: '1',
        margin: 0,
        padding: 0,
        border: '3px solid rgba(255, 255, 255, 0.8)',
        ...hoverEffect,
      }}
    >
      {(img) && (<Image src={img} />)}
    </Card>
  )
}