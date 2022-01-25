import React, { useState, useContext, useEffect, Suspense } from 'react';
import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { parseAlbumColorToCss } from './utils.js';

const AlbumImage = ({images}) => {

  if (!images) return <></> // TODO: Unsure if Suspense is handling this

  return (
    <Suspense fallback={<></>}>
      <Image
        src={images?.[1].url}
        sx={{
          'aspectRatio': '1 / 1',
          'objectFit': 'cover',
        }}

        // style={averageColor}
        radius='xs'
      />
    </Suspense>
  )
};

export default React.memo(AlbumImage);
