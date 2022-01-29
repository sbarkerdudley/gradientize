import React, { useEffect } from 'react'
import { accessToken , refreshToken } from '../spotify';
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import axios from 'axios';
import Login from './Login';
import { SpotifyApiContext } from 'react-spotify-api'

const SpotifyAPIContext = ({ children }) => {
  const [token, setToken] = React.useState(null)

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
      console.log(accessToken, '\n\n\n\n', new Date())
    }
  }, [token])
  return (
    <>
      {accessToken ? (
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
