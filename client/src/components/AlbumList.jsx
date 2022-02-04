import React, { useState, useEffect } from 'react';
import { Grid } from '@mantine/core';
import { Album } from './';
import { parseAlbumColorToCss } from '../utils';

export default function AlbumList({ list }) {

  console.log(list, 'Album LIST');
  // if (!list.length) return <></>
  // if (!list[0].id) return <h1>Error Loading AlbumList component</h1>

  return list.map(artist => (<pre>{artist}</pre>))



  return list.map((album, i) => {
    return (<Grid.Col xs={6} sm={4} md={4} lg={3} xl={3} key={`${album.id}${i}`}>
      <Album album={album} key={album.id} />
    </Grid.Col>)

  })


}

// React.useEffect(() => {
//   setAlbumsList(albumsList.map((album) => {
//     return parseAlbumColorToCss(album.images[2].url)
//       .then((success) => {
//         let [hue, shadow] = success;
//         album.hue = hue
//         album.shadow = shadow
//         return album
//       })
//   })
//     .sort((a, b) => a.hue - b.hue))
// }, [albumsList])
