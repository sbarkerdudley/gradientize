// import React from 'react';
import { useColor } from '../hooks';

const [cache, useColorCache] = useColor()

export default function Colorize( item ) {
  const { images } = item;

  var thumb = images.at(-1).url;

  if (images && !item.hue) {
    useColorCache.set(thumb).then((results) => {
      item.hue = results[0];
      item.shadow = results[1];
    });
    return item;
  } else if (images && images.hue) {
    return item;
  } else {
    // return <h1>error in Colorize component</h1>;
  }

  return item;
}
