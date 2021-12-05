import React, { useState } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';

const Album = (props) => {

  let [fav, setFav] = useState('light');
  const [visible, setVisible] = useState(false);

  return (

    <Card
      key={props.album.id}
      component="a"
      onClick={{}}
      radius='md'
      // href={props.artistURL}
      target="_blank"
    >
      <Card.Section>
        <Image
          src={props.album?.images?.[1].url}
          radius={'sm'}
        />
      </Card.Section>
      {/* <Card.Section>
        <Group position='apart' direction='column'>
          <ThemeIcon radius="xl" size="xl" color="red" variant={fav} onClick={()=>{}}>♡</ThemeIcon>
          <Text weight={'bold'} size="md">{props.album.artists?.[0].name}</Text>
          <Text weight={300} size="md">{props.album.name}</Text>
          <Text weight={500} size="md">{props.album.artists?.[0].name}</Text>
        </Group>
      </Card.Section> */}
    </Card>

  )
}

export default Album;