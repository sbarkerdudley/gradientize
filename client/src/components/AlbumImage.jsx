import React, { useState, useContext, useEffect, Suspense } from 'react';
import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { parseAlbumColorToCss } from '../utils';

const AlbumImage = ({ image }) => {

  if (!image) return <></> // TODO: Unsure if Suspense is handling this


  return (

    <Image
      fit='cover'
      src={image}
      radius='xs'
    />

  )
};

export default AlbumImage;
