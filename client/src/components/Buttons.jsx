import React from 'react';
import { Button } from "@mantine/core";


export const ButtonGenerator = (props) => {

  return (
    <Button
    style={props.style}
    radius='xl'
    size='xl'
    onClick={props.clickHandler}>{props.label}
    </Button>
  )
}