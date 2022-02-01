import React from 'react';
import { Grid } from '@mantine/core';
import Album from './Album';
import Gradient from './Gradient';
import AlbumList from './AlbumList';
import Thumb from './Thumb';
import { SpotifyContext } from './SpotifyProvider';
import ScrollButton from './ScrollButton';


const AlbumGrid = () => {

  let { albumsList, setAlbumsList } = React.useContext(SpotifyContext)

  let AlbumComponents = React.useMemo(() => {
    if (Array.isArray(albumsList)) {
      return albumsList.map((album, i) => {
        return (
          <Grid.Col xs={6} sm={6} md={4} lg={3} xl={2} key={album.id}>
            <Thumb img={album.images[2].url} id={album.id}/>
            {/* <Album {...{ album }} key={album.id} /> */}
          </Grid.Col>
        )
      })
    }
  }, [albumsList])

  return (
    <>
      {albumsList.length ?
        (<Grid span={12} gutter={'xl'} sx={{
        }}>
          {AlbumComponents}
        </Grid>)
        :
        (<Gradient />)
      }
    </>
  )
}

export default AlbumGrid;
