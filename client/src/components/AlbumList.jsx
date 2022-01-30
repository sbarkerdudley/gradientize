import React from 'react';
import { Grid } from '@mantine/core';
import Album from './Album';
import { SpotifyContext } from './SpotifyProvider';
import { parseAlbumColorToCss } from '../utils';


const AlbumList = () => {

  let { albumsList, setAlbumsList } = React.useContext(SpotifyContext);


  // let AlbumComponents = React.useMemo(() => {albumsList.map((album) => (
  //   <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={album.id}>
  //     <Album {...{ album }} key={album.id} />
  //   </Grid.Col>
  // ))))

  let AlbumComponents = React.memo(() => {
    if (Array.isArray(albumsList)) {
      return albumsList.map((album, i) => {
        return (
          <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={album.id}>
            <Album {...{ album }} key={album.id} shadow={album.shadow}/>
          </Grid.Col>
        )
      })
    }
  }, [albumsList])

  React.useEffect(() => {
    setAlbumsList(albumsList.map((album) => {
      return parseAlbumColorToCss(album.images[2].url)
        .then((success) => {
          let [hue, shadow] = success;
          album.hue = hue
          album.shadow = shadow
          return album
        })
      })
      .sort((a, b) => a.hue - b.hue))
  }, [albumsList])

  return (
    <>
    { AlbumComponents }
    </>
  )
}

export default AlbumList;
