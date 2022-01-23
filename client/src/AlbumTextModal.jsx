import React from 'react';
import { Group, Text } from '@mantine/core'

const AlbumTextModal = (props) => {
  let [visible, setVisible] = React.useState(true);
  return (
    <Group position='apart' direction='column'>
      <Text weight={'bold'} size="md">{props.album.artists?.[0].name}</Text>
      <Text weight={300} size="sm">{props.album.name}</Text>
      <Text weight={500} size="sm">{props.album.artists?.[0].name}</Text>
    </Group>
  )
};

export default React.memo(AlbumTextModal);
