import React from 'react';
import { Group, Text } from '@mantine/core'
import List from '../utils/List'

const ItemText = ({ item }) => {

  return JSON.stringify(Object.values(item))
  const { type } = item;

  const T = (text, props) => (<Text weight={'400'} sx={{ lineHeight: 1.2 }} {...{props}}>{text}</Text>)

  const types = {
    artist: (a) => {
      return [T(a.name), T(List.commaSeparated(a.genres)), T(a.uri, {component: 'a', href: a.uri})]
    },
    track: () => {
      return (<p>This is a Track</p>)
    },
    album: () => {
      return (<p>This is an Album</p>)
    }
  }


  return (<Group position='reverse' direction='column' >
    {types[type](item)}
  </Group>)
};

export default ItemText;
