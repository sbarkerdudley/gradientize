import React from 'react';
import Cookies from 'js-cookie';
import { CLIENT_ID } from '../../config.js';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { SpotifyApiContext } from 'react-spotify-api';
import 'react-spotify-auth/dist/index.css';

const SpotifyAPIContext = (props) => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
  return (
    <div className='api-context'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {props.children}
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div id='login'>
          <SpotifyAuth
            localStorage={true}
            redirectUri='http://localhost:3000/auth/spotify/callback'
            clientID={CLIENT_ID}
            scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
            onAccessToken={(token) => { console.log(token); setToken(token) }}
          />
        </div>
      )}
    </div>
  )
};

export default SpotifyAPIContext;
