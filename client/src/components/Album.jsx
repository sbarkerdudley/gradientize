import React, { useState, useEffect, useContext, Suspense } from 'react';
import {
  Card,
  Image,
  Text,
  Group,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import {
  AlbumImage,
  CardBody,
  ColorContext,
  Fav,
  Genres,
  ItemText,
  SearchContext,
} from './';

const Album = ({ item }) => {

  if (!item.type) {
    if (item.album) {
      item = item.album
    } else if (item.artist) {
      item = item.artist
    }
  }

  const { type, uri, id, images, name, external_urls, genres } = item

  var thumb = images.at(-1)?.url;
  const img = images[0]?.url;

  const { useSeeds } = useContext(SearchContext);
  const { useColorCache } = useContext(ColorContext);

  const handleClick = () => useSeeds.prepend({ id, img: thumb, type })
  const addToSeeds = () => useSeeds.prepend({ id, img: thumb, type })

  const sx = {
    transition: 'ease-in-out 200ms',
    aspectRatio: '1',
    padding: 0,
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





  // if (genres && Array.isArray(genres)) {
  //   return <Genres values={genres} />
  // }



  useEffect(() => {
    let isColorized = false;
    if (images && !item.hue) {
      useColorCache.set(item)
        .then(results => {
          setStyles(styles => ({ ...styles, ...results[1] }))
          console.log(results);
          item.hue = results[0]
          item.shadow = results[1]
        })
    } else {
      setStyles(styles => ({ ...styles, ...item.shadow }))
    }

    return () => {
      isColorized = true;
    }
  }, [])

  const Front = <AlbumImage
    image={img}
    radius='sm'
  />

  /**
 * @param {string[]} genres
 */

  var GenreChips =  []

  if (genres && Array.isArray(genres)) {
    GenreChips = <Genres values={genres} />
  }

  const Back = (<ItemText item={item}>{GenreChips}</ItemText>)

  if (item) {

    return (
      <Suspense fallback={<></>} >
        {console.log(item.shadow)}
        <Card
          ref={ref}
          onClick={handleClick}
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

export default React.memo(Album);
