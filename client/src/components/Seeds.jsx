import React, { useEffect, useContext } from 'react';
import { SimpleGrid } from '@mantine/core';
import { SearchContext } from './SearchProvider';
import Thumb from './Thumb';
import { useList } from '../hooks/useList';

export default React.memo(function Seeds() {
  const { seeds } = useContext(SearchContext);

  useEffect(() => {


  }, [])

  if (!Array.isArray(seeds)) {
    return <></>
  }

  return (
    <SimpleGrid cols={5}>
      {seeds.map((seed, i) => (
        <Thumb parent='seeds' id={seed.id || null} img={seed.img || null} key={i} />
      ))}
    </SimpleGrid>
  )
})
