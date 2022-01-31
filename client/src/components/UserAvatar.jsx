import React from 'react';
import { Avatar } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider';
import { getUserProfile } from '../spotify';

const UserAvatar = () => {

  let { token } = React.useContext(SpotifyContext);

  let [avatar, setAvatar] = React.useState(null);
  React.useEffect(() => {
    getUserProfile()
      .then(profile => setAvatar(profile.images[0].url || null))
      .catch(err => console.log(err))
  }, []);

  return (
    <Avatar size={'xl'} src={avatar} />
  )
};

export default React.memo(UserAvatar);
