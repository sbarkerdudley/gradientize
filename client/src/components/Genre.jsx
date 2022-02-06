import React from 'react';
import { Chips, Chip } from '@mantine/core';

export default function GenreTag(props) {
  return <Chip value={props.label}>{props.label}</Chip>
};
