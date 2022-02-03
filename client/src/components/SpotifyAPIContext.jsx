import { accessToken, setHeaders } from '../spotify';
import React, { useEffect } from 'react'
import axios from 'axios';
import Login from './Login';
import { SpotifyApiContext } from 'react-spotify-api'

const SpotifyAPIContext = ({ children }) => {
  const [token, setToken] = React.useState(null)

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
      setHeaders()
      console.log();
    } else {
      console.log('efsrgdthfntdgrsefsgrd');
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
