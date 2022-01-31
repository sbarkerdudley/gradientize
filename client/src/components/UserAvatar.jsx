import React, { Suspense } from 'react';
import { Avatar } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider';
import { getUserProfile } from '../spotify';

const UserAvatar = () => {

  const { token } = React.useContext(SpotifyContext);

  let [avatar, setAvatar] = React.useState(null);

  async function useAvatar() {
    await token
    let image = window.localStorage?.getItem('avatar') || null
    if (!image) {
      getUserProfile()
        .then(profile => {
          image = profile?.images?.[0].url
          window.localStorage.setItem('avatar', image)
          setAvatar(image)
          return image
        })
        .then(console.log)
        .catch(console.error)
    } else {
      setAvatar(image)
    }
  }

  React.useEffect(() => {
    useAvatar()
  }, [token, avatar]);

  return (
    <Avatar size={'xl'} sx={{ borderRadius: '50%' }} src={avatar} />
  )
};

export default UserAvatar;
