import React from 'react';
import { Image } from '@mantine/core';

const AlbumImage = ({ image }) => {
  console.log(image);

  if (!image) return <></>

  return (
    <Image
      fit='cover'
      src={image}
      radius='xs'
    />
  )
};

export default AlbumImage;
