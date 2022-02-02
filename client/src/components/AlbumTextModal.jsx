import React from 'react';
import { Group, Text } from '@mantine/core'
import List from '../utils/List'

const AlbumTextModal = ({ album }) => {

  // let {
  //   name,
  //   type //, = 'artist' or 'album'
  //   uri,
  //   genres, // [string]
  //   href,
  //   id
  // } = artist;




  const ARTISTS = List.withOxfordComma(album.artists.map(artist => artist.name));
  const YEAR = album['release_date'].slice(0, 4)

  let [visible, setVisible] = React.useState(true);
  return (
    <Group position='reverse' direction='column' sx={{lineHeight: 1}}>
      <Text align='right' weight={'bold'} size="md">{ARTISTS}</Text>
      <Text align='right' weight={'300'} sx={{fontSize: '2rem', lineHeight: 1.2}}>{album.name}</Text>
      <Text align='right' weight={500} size="sm">{YEAR}</Text>
    </Group>
  )
};

export default React.memo(AlbumTextModal);
