import React from 'react';
import { Genre } from './';

export default function Genres({values, hue}) {
  return (
    <div className='genres'>
      {values.map((genre) => (<Genre value={genre} hue={hue} />))}
    </div>
  )

}