import React from 'react';
import { Group, Text } from '@mantine/core'

import { List, genres } from '../utils/'

const ItemText = ({ item }) => {

  // return JSON.stringify(Object.entries(item))
  const { type } = item;

  const T = (text, props) => (<p><Text weight={'400'} sx={{ lineHeight: 1.2 }} {...{ props }}>{text}</Text></p>)

  const TYPES = {
    artist: (a) => {
      return [a.name, a.uri, a.external_urls.spotify, a.href, ...a.genres].map(text => T(text))
    },
    track: () => {
      return (<p>This is a Track</p>)
    },
    album: () => {
      return (Object.entries(item).map(data => <p>{JSON.stringify(data)}</p>))
    },
    playlist: () => {
      return <p>Playlist</p>
    }
  }


  return (<Group position='reverse' direction='column' >
    {TYPES[type](item)}
  </Group>)
};

export default ItemText;
