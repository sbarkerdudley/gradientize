import React, { Suspense } from 'react';
import { Avatar } from '@mantine/core';
import {
  Resource
} from './';
import { Spotify } from '../spotify';

const UserAvatar = () => {


  return (
    <Resource
      action={Spotify.get.userProfile}
      render={(data) => {
        return (<Avatar size={'xl'} sx={{ borderRadius: '50%' }} src={data.images?.[0].url || null} />)
      }}
    />
  )
};

export default UserAvatar;
