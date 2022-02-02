import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SearchContext } from './SearchProvider';
import Fav from './Fav';
import AlbumImage from './AlbumImage';
import AlbumTextModal from './AlbumTextModal';
import CardBody from './CardBody';
import { parseAlbumColorToCss } from '../utils';

const Album = ({ album }) => {

  let { useSeeds } = useContext(SearchContext);

  let [averageColor, setAverageColor] = React.useState({})
  const handleClick = useSeeds.prepend

  const sx = {
    transition: 'ease-in-out 300ms',
    aspectRatio: '1 / 1',
    willChange: 'transform',
    ...averageColor
  }

  let { hovered, ref } = useHover();

  let hoverStyle = hovered ? {
    transform: 'scale(1.04)',
    ...sx
  } : {
    transform: 'scale(1)',
    ...sx
  }

  const Front = React.useMemo(() => (
    <AlbumImage
      image={album?.images[0].url}
      radius='sm'
      artistURL={album.artist}
      albumURL={album?.external_urls.spotify}
    />)
  )

  const Back = React.useMemo(() => (<AlbumTextModal album={album} />))

  useEffect(() => {
    if (album.images) {
      parseAlbumColorToCss(album.images[2].url)
        .then((success) => {
          let [hue, shadow] = success;
          setAverageColor(shadow)
          album.shadow = shadow
        })
        .catch(console.error)
    }
  }, [])


  return (
    <Suspense fallback={<Card sx={sx} />} >
      <Card
        ref={ref}
        onClick={() => handleClick({ id: album.id, img: album.images?.[2].url })}
        key={album.id}
        // component="a"
        // href={`${album.uri}:play`}
        // style={hoverStyle}
        sx={hoverStyle}
        radius='md'
      >
        <Card.Section>
          <Fav children={'+'} handleClick={() => console.log(album.id)} style={hoverStyle} />
        </Card.Section>
        <Card.Section>
          <CardBody>
            {hovered ? Back : Front}
          </CardBody>
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