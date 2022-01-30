import React, { useEffect } from 'react'
import { accessToken } from '../spotify';
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
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      ) : (
        <Login />
      )}
    </>
  )
};

export default SpotifyAPIContext;
