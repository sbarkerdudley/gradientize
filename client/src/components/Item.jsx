import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Card, Text,  } from '@mantine/core';
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

const Item = ({ item }) => {

  // console.log(item.type, 'inside Album component');
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

  // const [styles, setStyles] = React.useState(sx)

  // let { hovered, ref } = useHover();

  // const Front = <AlbumImage
  //   image={album?.images[0].url}
  //   radius='sm'
  //   artistURL={item.artist}
  //   albumURL={album?.external_urls.spotify}
  // />

  // const Back = <ItemText item={album} />

  // useEffect(() => {
  //   if (item.images) {
  //     parseAlbumColorToCss(item.images[2].url)
  //       .then((success) => {
  //         let [hue, shadow] = success;
  //         setStyles(shadow)
  //         item.shadow = shadow
  //       })
  //   }
  // }, [])

  useEffect(() => {
    if (item.images && !item.hue) {
      useColorCache.set(album)
        .then(results => {
          item.hue = results[0]
          item.shadow = results[1]
          setStyles(styles => ({...styles, ...results[1]}))
        })
    } else if (item.hue) {
      setStyles(styles => ({...styles, ...item.shadow}))
    }
  }, [album, item.hue])

  if(item.shadow) {
    return (
      <Suspense fallback={<></>} >
        <Card
          ref={ref}
          onClick={() => handleClick({ id: item.id, img: item.images?.[2].url, type: item.type })}
          key={item.id}
          padding={0}
          // component="a"
          // href={`${item.uri}:play`}
          // sx={styles}
          radius='md'
        >

          <Fav children={'+'} handleClick={() => console.log(album)} style={sx} />


          <div><pre>{JSON.stringify(item)}</pre></div>


          {/* {hovered ? Back : Front} */}

        </Card>
      </Suspense>
    )
  } else {
    return <></>
  }

}

export default Item;
// export default React.memo(Item)


/*

1. Fetch arrayof albums
2. parse for color, assign hue, shadow to album object
3. return to front end, pass as props

*/