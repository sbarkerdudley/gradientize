import React, { useState, useEffect } from 'react';
import { Card, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import FastAverageColor from 'fast-average-color';
const fac = new FastAverageColor();
import { getHue, makeHSLAShadow } from './utils.js'
import Fav from './Fav.jsx';

const AlbumImage = (props) => {
  let { images } = props
  let [averageColor, setAverageColor] = React.useState('')
  let [hue, setHue] = React.useState(0)

  useEffect(() => {
    (images &&
    fac.getColorAsync(images[2].url)
      .then(color => getHue(...color.value))
      .then(hue => {
        setHue()
        return `hsla(${hue}, 100%, 50%, 0.34)`
      })
      .then(colorString => setAverageColor(makeHSLAShadow(colorString))))
  }, [images]);


  return (
    <Image
      src={images?.[1].url}
      style={averageColor}
      radius='xs'
    />
  )
};

export default AlbumImage;
