import React from 'react';
import { Chips, Chip } from '@mantine/core';
import { genres } from '../utils'

export default function Genre({ value }) {
  if (!genres[value]) return (<></>);

  return (
    <Chip
      value={value}
      variant='outlined'
    >
      {genres[value] || value}
    </Chip>
  )
};

/*

Name	Static selector	Description
label	    .mantine-Chips-label	    Chip label, includes all other elements except input
outline	    .mantine-Chips-outline	    Outline chip modifier, added to label
filled	    .mantine-Chips-filled	    Filled chip modifier, added to label
input	    .mantine-Chips-input	    Chip input, hidden by default
disabled	    .mantine-Chips-disabled	    Chip label disabled modifier
checked	    .mantine-Chips-checked	    Chip label checked modifier
iconWrapper	    .mantine-Chips-iconWrapper	    Check icon wrapper
checkIcon	    .mantine-Chips-checkIcon	    Check icon, displayed when checkbox or radio is checked






*/