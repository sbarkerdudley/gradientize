import React, { useState } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';

const Album = (props) => {

  let [fav, setFav] = useState('light');
  const [visible, setVisible] = useState(false);

  const toggleAlbum = () => setFav((fav) => fav = fav === 'light' ? '' : 'light')
  const toggleText = (v) => setVisible(!v)

  const saveAlbumOnClick = (album) => album.id;

  return (
    <div>

      <Card
        key={props.album.id}
        onClick={toggleText}
        shadow="md"
        padding="xl"
        radius='sm'
        component="a"
        // href={props.artistURL}
        target="_blank"
      >
        <Card.Section>
          <Image
            src={props.album?.images?.[1].url}
            radius={'sm'} />
        </Card.Section>
        <Card.Section>
          <Group position='apart'  direction='column'>
            <ThemeIcon radius="xl" size="xl" color="red" variant={fav} onClick={toggleAlbum}>♡</ThemeIcon>
            <Text weight={'bold'} size="md">{props.album.artists?.[0].name}</Text>
            <Text weight={300} size="md">{props.album.name}</Text>
            <Text weight={500} size="md">{props.album.artists?.[0].name}</Text>
          </Group>
        </Card.Section>
      </Card>
    </div>

  )
}

export default Album;