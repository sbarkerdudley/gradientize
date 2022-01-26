import React from 'react';
import { Group, Text } from '@mantine/core'

const AlbumTextModal = ({album}) => {

  // let {
  //   name,
  //   type //, = 'artist' or 'album'
  //   uri,
  //   genres, // [string]
  //   href,
  //   id
  // } = artist;
  let [visible, setVisible] = React.useState(true);
  return (
    <Group position='apart' direction='column'>
      <Text weight={'bold'} size="md">{album.artists?.[0].name}</Text>
      <Text weight={300} size="sm">{album.name}</Text>
      <Text weight={500} size="sm">{album.artists?.[0].name}</Text>
    </Group>
  )
};

export default React.memo(AlbumTextModal);
