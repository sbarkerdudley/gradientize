import React from 'react';
import { Grid } from '@mantine/core';
import Album from './Album';
import Gradient from './Gradient';
import AlbumList from './AlbumList';
import Thumb from './Thumb';
import { SpotifyContext } from './SpotifyProvider';
import ScrollButton from './ScrollButton';

function getProps(album) {
  return ({
    images: [{}]
  })
}

const props = ['album_group', 'album_type', 'artists', 'available_markets', 'external_urls', 'spotify', 'href', 'id', 'images', 'name', 'release_date', 'release_date_precision', 'total_tracks', 'type', 'uri']

const AlbumGrid = () => {

  let { albumsList, setAlbumsList } = React.useContext(SpotifyContext)

  let AlbumComponents = React.useMemo(() => {
    return albumsList.map((album, i) => (
      <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={`${album.id}${i}`}>
        <Album {...{ album }} key={album.id} />
      </Grid.Col>
    ))
  }, [albumsList])

  return (
    <>
      {albumsList.length ?
        (<Grid span={12} gutter={'xl'} sx={{
        }}>
          {AlbumComponents}
          {console.log(new Date())}
        </Grid>)
        :
        (<Gradient />)
      }
    </>
  )
}

export default AlbumGrid;

// (<Thumb img={album.images[2].url} id={album.id} key={album.id} />)