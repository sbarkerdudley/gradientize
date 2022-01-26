import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../../../config'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import axios from 'axios';
import Login from './Login';

const SpotifyAPIContext = ({ children }) => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
  return (
    <>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <Login>
          <SpotifyAuth
            localStorage={true}
            redirectUri={REDIRECT_URI}
            clientID={CLIENT_ID}
            scopes={[Scopes.userReadPrivate, 'user-read-email']}
            onAccessToken={(token) => setToken(token) }
          />
        </Login>
      )}
    </>
  )
};

export default SpotifyAPIContext;
