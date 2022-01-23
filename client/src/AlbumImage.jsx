import React, { useState, useContext, useEffect, Suspense } from 'react';
import FastAverageColor from 'fast-average-color';
import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { getHue, makeHSLAShadow } from './utils.js'
import Fav from './Fav.jsx';
const fac = new FastAverageColor();

const AlbumImage = (props) => {
  let { images } = props
  let [averageColor, setAverageColor] = React.useState()

  useEffect(() => {
    (images &&
    fac.getColorAsync(images[2].url)
      .then(color => getHue(...color.value))
      .then(int => `hsla(${int}, 100%, 50%, 0.34)`)
      .then(colorString => setAverageColor(makeHSLAShadow(colorString))))
  }, [images?.[2]?.url])


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