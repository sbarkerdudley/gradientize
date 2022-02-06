import { useHover } from '@mantine/hooks';
import {
  AlbumImage,
  CardBody,
  ColorContext,
  Fav,
  ItemText,
  SearchContext,
} from './';


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


  if (item.shadow) {
    return (

      <Card
        ref={ref}
        onClick={() => handleClick({ id: item.id, img: item.images?.[2].url, type: item.type })}
        key={item.id}
        padding={0}
        radius='md'
      >

        <Fav children={'+'} handleClick={() => console.log(album)} style={sx} />


        <div><pre>{JSON.stringify(item)}</pre></div>


        {/* {hovered ? Back : Front} */}

      </Card>

    )
  } else {
    return <></>
  }

}

export default Item;


import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';

import { SpotifyContext } from './SpotifyProvider';




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





  return (
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
        <Fav children={'♥️'} handleClick={() => console.log(album.id)} style={hoverStyle} color={hue} />
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


/*

1. Fetch arrayof albums
2. parse for color, assign hue, shadow to album object
3. return to front end, pass as props

*/