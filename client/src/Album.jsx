import React, { useState, useContext } from 'react';
import { Card, Image, Text, ThemeIcon, Overlay, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { SpotifyContext } from './SpotifyProvider.jsx';
import Fav from './Fav.jsx';
import AlbumImage from './AlbumImage.jsx';
import AlbumTextModal from './AlbumTextModal.jsx';

const Album = ({album}) => {

  let [fav, setFav] = useState('light');
  let [visible, setVisible] = useState(false);
  let toggleFav = () => setFav(fav === 'light' ? '' : 'light');
  let { hovered, ref } = useHover();
  let hoverStyle = hovered ? {
    transform: 'scale(1.04)',
    transition: 'ease-in-out 200ms'
  } : {}
  React.useEffect(() => {
    if (album) {

    }
  }, [album?.id])


  return (

    <Card
      ref={ref}
      key={album.id}
      component="a"
      href={album.external_urls.spotify}
      style={hoverStyle}
      radius='md'
      target="_blank"
    >
      <Card.Section>
        <Fav children={'♥️'} variant={fav} handleClick={toggleFav} style={hoverStyle} />
      </Card.Section>
      <Card.Section>
        <AlbumImage images={album?.images} radius='sm' artistURL={album.artist} albumURL={album?.external_urls.spotify}/>
      </Card.Section>
      <Card.Section>
        <AlbumTextModal album={album} />
      </Card.Section>
    </Card>

  )
}

export default Album;
// export default React.memo(Album);