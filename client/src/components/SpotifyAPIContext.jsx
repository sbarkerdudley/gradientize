import React, { useEffect } from 'react'
import { accessToken } from '../spotify';
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import axios from 'axios';
import Login from './Login';

const SpotifyAPIContext = ({ children }) => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

  useEffect(() => {

    setToken(accessToken);
  }, [])
  return (
    <>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      ) : (
        <Login>
          {/* <SpotifyAuth
            localStorage={true}
            redirectUri={REDIRECT_URI}
            clientID={CLIENT_ID}
            scopes={[Scopes.userReadPrivate, 'user-read-email']}
            onAccessToken={(token) => setToken(token) }
          /> */}
        </Login>
      )}
    </>
  )
};

export default SpotifyAPIContext;
