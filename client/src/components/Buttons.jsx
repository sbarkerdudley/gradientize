import React from 'react';
import { logout } from '../spotify';
import { Button } from "@mantine/core";


export const ButtonGenerator = (props) => (
  <Button
  sx={props.style}
  radius='xl'
  size='xl'
  onClick={props.onClick}>{props.label}
  </Button>
);

export const LogOutButton = () => (
  <ButtonGenerator
    onClick={logout}
    label={'LogOut'}
  />
);

export const LogInButton = () => (
  <ButtonGenerator
    onClick={() => window.location.href += 'login'}
    label={'LogIn'}
  />
);


