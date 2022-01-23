import React from 'react';
import { Avatar } from '@mantine/core';
import { SpotifyContext } from './SpotifyProvider.jsx';

const UserAvatar = () => {
  // TODO: Style this and add to AppHeader
  let { avatar } = React.useContext(SpotifyContext);
  return (
    <Avatar size={'xl'} src={avatar} />
  )
};

export default UserAvatar;
