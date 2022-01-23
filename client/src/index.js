import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

if (document) {
  document.title = 'NotSpotify';

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
