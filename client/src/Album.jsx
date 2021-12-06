import React, { useState, useContext } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider.jsx';
import Fav from './Fav.jsx';

const Album = (props) => {

  let [fav, setFav] = useState('light');
  let [visible, setVisible] = useState(false);
  let toggleFav = () => setFav(fav === 'light' ? '' : 'light');

  return (

    <Card
      key={props.album.id}
      component="a"
      href={props.artistURL}
      // onClick={}
      radius='md'
      target="_blank"
    >
      <Card.Section>
        <Fav children={'♥️'} variant={fav} handleClick={toggleFav}/>
      </Card.Section>
      <Card.Section>
        <Image
          src={props.album?.images?.[1].url}
          style={{'z-index': 0}}
          radius={'sm'}
        />
      </Card.Section>
      <Card.Section>
        <Group position='apart' direction='column'>
          <Text weight={'bold'} size="md">{props.album.artists?.[0].name}</Text>
          <Text weight={300} size="sm">{props.album.name}</Text>
          <Text weight={500} size="sm">{props.album.artists?.[0].name}</Text>
        </Group>
      </Card.Section>
    </Card>

  )
}

export default Album;