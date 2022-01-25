import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SpotifyContext } from './SpotifyProvider.jsx';
import Fav from './Fav.jsx';
import AlbumImage from './AlbumImage.jsx';
import AlbumTextModal from './AlbumTextModal.jsx';
import { parseAlbumColorToCss } from './utils.js';

const Album = ({ album }) => {

  let [fav, setFav] = useState('light');
  let [averageColor, setAverageColor] = React.useState({})
  let [hue, setHue] = React.useState({})

  let toggleFav = () => setFav(fav === 'light' ? '' : 'light');
  let { hovered, ref } = useHover();
  let [referenceElement, setReferenceElement] = useState(null);
  let hoverStyle = hovered ? {
    transform: 'scale(1.04)',
    transition: '200ms'
  } : {}

  useEffect(() => {
    if (album.images) {
      parseAlbumColorToCss(album.images[2].url)
        .then((success) => {
          let [hue, shadow] = success;
          console.log(hue);
          setAverageColor(shadow)
        })
    }
  }, [])

  return (

    <Card
      ref={ref}
      key={album.id}
      component="a"
      href={album.external_urls.spotify}
      style={hoverStyle}
      sx={{
        'aspectRatio': '1 / 1',
        'willChange': 'transform',
        ...averageColor
      }}
      radius='md'
      target="_blank"
    >
      <Card.Section>
        <Suspense fallback={<></>}>
          <Fav children={'♥️'} handleClick={toggleFav} style={hoverStyle} color={hue} />
        </Suspense>
      </Card.Section>
      <Card.Section>
        <AlbumImage images={album?.images} radius='sm' artistURL={album.artist} albumURL={album?.external_urls.spotify} />
      </Card.Section>
      <Card.Section>
        <AlbumTextModal album={album} />
      </Card.Section>
    </Card>

  )
}

// export default Album;
export default React.memo(Album);