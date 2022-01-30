import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SpotifyContext } from './SpotifyProvider';
import Fav from './Fav';
import AlbumImage from './AlbumImage';
import AlbumTextModal from './AlbumTextModal';
import { parseAlbumColorToCss } from '../utils';

const Album = ({ album }) => {


  let [averageColor, setAverageColor] = React.useState({})
  let [hue, setHue] = React.useState({})

  const sx = {
    'aspectRatio': '1 / 1',
    'willChange': 'transform',
    ...averageColor
  }

  let { hovered, ref } = useHover();
  let [referenceElement, setReferenceElement] = useState(null);
  let hoverStyle = hovered ? {
    transform: 'scale(1.04)',
    transition: '200ms',
    ...sx
  } : sx



  useEffect(() => {
    if (album.images) {
      parseAlbumColorToCss(album.images[2].url)
        .then((success) => {
          let [hue, shadow] = success;
          setHue(hue)
          setAverageColor(shadow)
          album.hue = hue
          album.shadow = shadow
          console.log(shadow);
        })
        .catch(console.error)
    }
  }, [album.images[2].url])


  return (
    <Suspense fallback={<Card sx={sx} />} >
      <Card
        ref={ref}
        key={album.id}
        component="a"
        href={`${album.uri}:play`}
        style={hoverStyle}
        sx={sx}
        radius='md'
      >
        <Card.Section>
          <Suspense fallback={<></>}>
            <Fav children={'♥️'} handleClick={() => console.log(album.id)} style={hoverStyle} color={hue} />
          </Suspense>
        </Card.Section>
        <Card.Section>
          <AlbumImage images={album?.images} radius='sm' artistURL={album.artist} albumURL={album?.external_urls.spotify} />
        </Card.Section>
        <Card.Section>
          <AlbumTextModal album={album} />
        </Card.Section>
      </Card>
    </Suspense>
  )
}

// export default Album;
export default React.memo(Album);


/*

1. Fetch arrayof albums
2. parse for color, assign hue, shadow to album object
3. return to front end, pass as props

*/