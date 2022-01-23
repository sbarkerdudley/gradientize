import React, { useState, useContext, useEffect, Suspense } from 'react';
import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { parseAlbumColorToCss } from './utils.js';

const AlbumImage = ({images}) => {

  if (!images) return <></> // TODO: Unsure if Suspense is handling this

  let [averageColor, setAverageColor] = React.useState()

  useEffect(() => {
    if (images) {
      parseAlbumColorToCss(images[2].url)
        .then((css) => setAverageColor(css))
        .catch(console.error())
    }
  }, [images[0].url])

  return (
    <Suspense fallback={<></>}>
      <Image
        src={images?.[1].url}
        style={averageColor}
        radius='xs'
      />
    </Suspense>
  )
}

export default React.memo(AlbumImage);