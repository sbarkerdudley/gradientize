import React, { useState, useContext, useEffect, Suspense } from 'react';
import { Image } from '@mantine/core';

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
