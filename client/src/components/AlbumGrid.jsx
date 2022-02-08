import React, { useState, useContext, useEffect } from 'react';
import { Grid, SimpleGrid } from '@mantine/core';
import {
  SpotifyContext,
  ColorProvider,
  Album,
  Gradient,
  AlbumList,
  Thumb,
  ScrollButton,
} from './';

const props = ['album_group', 'album_type', 'artists', 'available_markets', 'external_urls', 'spotify', 'href', 'id', 'images', 'name', 'release_date', 'release_date_precision', 'total_tracks', 'type', 'uri']

const AlbumGrid = ({ items }) => {

  console.log(items, 'ITEMS');
  if (items.artists) {
    items = items.artists.items
  } else if (items.items) {
    items = items.items
  }
  // return (<SimpleGrid><div><pre>
  //   {JSON.stringify(items.map(item => Object.entries(item)))}
  // </pre><br /></div></SimpleGrid>)
  // if (!Array.isArray(items)) {
  //   if (items.artists) {
  //     items = items.artists.items
  //   } else if (items.albums) {
  //     items = items.albums.items
  //   }
  //   console.log({items});
  // }

  let { musicList, setMusicList } = useContext(SpotifyContext)



  var AlbumComponents = items.map((item, i) => (
    <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={`${item.id}${i}`}>
      <Album {...{ item }} key={item.id} />
    </Grid.Col>
  ))



  return (
    <>
      {items.length ?
        (<Grid span={12} gutter={'xl'} >
          {AlbumComponents}
        </Grid>)
        :
        (<Gradient />)
      }
    </>
  )
}

export default AlbumGrid;


/*



"external_urls":{"spotify":"https://open.spotify.com/artist/0BqALs1lInR9TTOulUADH7"}
"followers":{"href":null
"total":54695}
"genres":["bebop"
"jazz"
"jazz trio"
"stride"]
"href":"https://api.spotify.com/v1/artists/0BqALs1lInR9TTOulUADH7"
"id":"0BqALs1lInR9TTOulUADH7"
"images":[{"height":640
"url":"https://i.scdn.co/image/ab67616d0000b273b62b03a629fec8f1ac2d1c0d"
"width":640}
{"height":300
"url":"https://i.scdn.co/image/ab67616d00001e02b62b03a629fec8f1ac2d1c0d"
"width":300}
{"height":64
"url":"https://i.scdn.co/image/ab67616d00004851b62b03a629fec8f1ac2d1c0d"
"width":64}]
"name":"Ahmad Jamal Trio"
"popularity":49
"type":"artist"
"uri":"spotify:artist:0BqALs1lInR9TTOulUADH7"



const track = [
  "album",
  "artists", // array

  "duration_ms",
  "explicit",
  "external_ids",
  "external_urls",
  "href",
  "id",
  "is_local", // local file ** exclude ?
  "name",
  "popularity",
  "preview_url",
  "track_number",
  "type",
  "uri"
]


*/