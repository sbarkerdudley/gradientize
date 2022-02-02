import React, { useState, useContext, useEffect, Suspense } from 'react';
import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { parseAlbumColorToCss } from '../utils';

const AlbumImage = ({image}) => {

  if (!image) return <></> // TODO: Unsure if Suspense is handling this

  return (
    <Suspense fallback={<></>}>
      <Image
        src={image}
        sx={{
          'aspectRatio': '1',
          'objectFit': 'cover',
        }}

        // style={averageColor}
        radius='xs'
      />
    </Suspense>
  )
};

export default React.memo(AlbumImage);
