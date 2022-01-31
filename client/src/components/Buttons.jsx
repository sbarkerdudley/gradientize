import React from 'react';
import { logout } from '../spotify';
import { Button } from "@mantine/core";


const ButtonGenerator = (props) => (
  <Button
  sx={{backgroundColor: 'hotpink'}}
  radius='xl'
  size='lg'
  onClick={props.onClick}>{props.label}
  </Button>
);

export const LogOutButton = () => (
  <ButtonGenerator
    onClick={logout}
    label={'Log Out'}
  />
);

export const LogInButton = () => (
  <ButtonGenerator
    onClick={() => window.location.href += 'login'}
    label={'Log In'}
  />
);


export default ButtonGenerator;
