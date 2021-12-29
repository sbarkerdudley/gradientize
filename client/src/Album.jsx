import React, { useState, useContext } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SpotifyContext } from './SpotifyProvider.jsx';
import Fav from './Fav.jsx';
import AlbumImage from './AlbumImage.jsx';
import AlbumTextModal from './AlbumTextModal.jsx';

const Album = (props) => {

  let [fav, setFav] = useState('light');
  let [visible, setVisible] = useState(false);
  let toggleFav = () => setFav(fav === 'light' ? '' : 'light');
  let { hovered, ref } = useHover();
  let [referenceElement, setReferenceElement] = useState(null);
  let hoverStyle = hovered ? {
    transform: 'scale(1.04)',
    transition: 'ease-in-out 200ms'
  } : {}
  return (

    <Card
      ref={ref}
      key={props.album.id}
      component="a"
      // href={props.album.external_urls.spotify}
      style={hoverStyle}
      radius='md'
      target="_blank"
    >
      <Card.Section>
        <Fav children={'♥️'} variant={fav} handleClick={toggleFav} style={hoverStyle} />
      </Card.Section>
      <Card.Section>
        <AlbumImage
          images={props.album?.images}
          radius='sm' artistURL={props.artist}
          albumURL={props.album?.external_urls.spotify}
        />
      </Card.Section>
      <Card.Section>
        <AlbumTextModal album={props.album} referenceElement={hovered}/>
      </Card.Section>
    </Card>

  )
}

export default Album;