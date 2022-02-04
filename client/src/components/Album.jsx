import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SearchContext } from './SearchProvider';
import { ColorContext } from './ColorProvider';
import Fav from './Fav';
import AlbumImage from './AlbumImage';
import ItemText from './ItemText';
import CardBody from './CardBody';
import { parseAlbumColorToCss } from '../utils';

const Album = ({ album }) => {

  // console.log(album.type, 'inside Album component');
  // check for 'type' key: artist, track, album, etc


  const { useSeeds } = useContext(SearchContext);
  const { useColorCache } = useContext(ColorContext);

  const handleClick = useSeeds.prepend

  const sx = {
    transition: 'ease-in-out 200ms',
    aspectRatio: '1',
    padding: 0,
    // margin: 'auto',
    willChange: 'transform',
    '&>*': {
      cursor: 'pointer',
    },
    '&:hover,&:focus': {
      transform: 'scale(1.04)',
    },
  }

  const [styles, setStyles] = React.useState(sx)

  let { hovered, ref } = useHover();

  const Front = <AlbumImage
    image={album?.images[0].url}
    radius='sm'
    artistURL={album.artist}
    albumURL={album?.external_urls.spotify}
  />

  const Back = <ItemText item={album} />

  // useEffect(() => {
  //   if (album.images) {
  //     parseAlbumColorToCss(album.images[2].url)
  //       .then((success) => {
  //         let [hue, shadow] = success;
  //         setStyles(shadow)
  //         album.shadow = shadow
  //       })
  //   }
  // }, [])

  useEffect(() => {
    if (album.images && !album.hue) {
      useColorCache.set(album)
        .then(results => {
          album.hue = results[0]
          album.shadow = results[1]
          setStyles(styles => ({...styles, ...results[1]}))
        })
    } else if (album.hue) {
      setStyles(styles => ({...styles, ...album.shadow}))
    }
  }, [album, album.hue])

  if(album.shadow) {
    return (
      <Suspense fallback={<></>} >
        <Card
          ref={ref}
          onClick={() => handleClick({ id: album.id, img: album.images?.[2].url, type: album.type })}
          key={album.id}
          padding={0}
          // component="a"
          // href={`${album.uri}:play`}
          sx={styles}
          radius='md'
        >

          <Fav children={'+'} handleClick={() => console.log(album)} style={sx} />





          {hovered ? Back : Front}

        </Card>
      </Suspense>
    )
  } else {
    return <></>
  }

}

export default Album;
// export default React.memo(Album)


/*

1. Fetch arrayof albums
2. parse for color, assign hue, shadow to album object
3. return to front end, pass as props

*/