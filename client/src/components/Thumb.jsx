import React, { useContext } from 'react';
import { Card, Image } from '@mantine/core';
import { SearchContext } from './';

export default function Thumb(props) {
  const { img, id, type, parent } = props
  const { useSeeds } = useContext(SearchContext);


  const handleClick = parent === 'seeds' ? useSeeds.aggregateQuery : useSeeds.prepend
  // const handleClick = parent === 'seeds' ? useSeeds.splice : useSeeds.prepend

  return (
    <Card
      onClick={() => handleClick({ img, id, type })}
      sx={{
        boxSizing: 'content-box',
        display: 'block',
        width: '64px',
        aspectRatio: '1',
        margin: 0,
        padding: 0,
        '&:hover,&:focus': {
          filter: 'brightness(1.2)',
          transition: '100ms ease-in-out'
        },
        border: '3px solid rgba(255, 255, 255, 0.8)',
      }}
    >
      {(img) && (<Image src={img} />)}
    </Card>
  )
}