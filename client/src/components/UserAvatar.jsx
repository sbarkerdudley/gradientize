import React from 'react';
import { Avatar } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider';
import { getUserProfile } from '../spotify';

const UserAvatar = () => {
  // TODO: Style this and add to AppHeader
  // let { avatar } = React.useContext(SpotifyContext);
  let avatar = React.useMemo(() => {
    let profile = getUserProfile();
    console.log(profile);
  });

  return (
    <Avatar size={'xl'} src={avatar} />
  )
};

export default React.memo(UserAvatar);
