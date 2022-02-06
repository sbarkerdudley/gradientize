import React from 'react';
import { render } from 'react-dom';
import Main from './main';

if (document) {
  render(
    <Main />,
    document.getElementById('root')
  );
}
