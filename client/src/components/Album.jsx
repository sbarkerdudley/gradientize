import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Image, Text, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import {
  AlbumImage,
  CardBody,
  ColorContext,
  Fav,
  ItemText,
  SearchContext,
} from './';

import { parseAlbumColorToCss } from '../utils';

const Album = ({ album }) => {

  const { type, uri, id, images } = album

  const { useSeeds } = useContext(SearchContext);
  const { useColorCache } = useContext(ColorContext);


  useEffect(() => {
    let isColorized = false;
    if (album.images && !album.hue) {
      useColorCache.set(album)
        .then(results => {
          setStyles(styles => ({ ...styles, ...results[1] }))
          album.hue = results[0]
          album.shadow = results[1]
        })
    } else {
      setStyles(styles => ({ ...styles, ...album.shadow }))
    }

    return () => {
      isColorized = true;
    }

  }, [album, album.hue, album.shadow])

  // const TYPES = {
  //   album: function () {
  //     id = album.artists[0].id;
  //     thumb = album.images.at(-1);
  //     href = album.href
  //     // img = album.images.at(0);


  //   },
  //   artist: function () {
  //     id = album.id;
  //     thumb = album.images.at(-1)
  //     name = album.name
  //     href = album.href
  //     genres = album.genres

  //     // img = album.images.at(0)
  //   },
  //   track: function (item) {
  //     const { album,
  //       artists,
  //       // available_markets,
  //       disc_number,
  //       duration_ms,
  //       explicit,
  //       external_ids,
  //       external_urls,
  //       href,
  //       id,
  //       is_local,
  //       name,
  //       popularity,
  //       preview_url,
  //       track_number,
  //       type,
  //       uri
  //     } = item
  //     return {
  //       year: album['release_date'],
  //       explicit,
  //       href,
  //       id,
  //       popularity,
  //       name,
  //       artist,
  //       external_ids,
  //       external_urls,
  //       is_local,
  //       track_number,
  //       preview_url,


  //     }

  //   }
  // }



  const handleClick = () => useSeeds.prepend({ id, img: images?.[2].url, type })
  const addToSeeds = () => useSeeds.prepend({ id, img: images[2].url, type })

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
    image={album.images[0].url}
    radius='sm'
    artistURL={album.artist}
    albumURL={album?.external_urls.spotify}
  />

  const Back = <ItemText item={album} />

  if (album.shadow) {

    return (
      <Suspense fallback={<></>} >
        <Card
          ref={ref}
          onClick={handleClick}
          key={album.id}
          padding={0}
          // component="a"
          // href={`${album.uri}:play`}
          sx={styles}
          radius='md'
        >
          <Fav children={'+'} handleClick={addToSeeds} style={sx} />
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
