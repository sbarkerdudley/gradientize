import { accessToken, setHeaders } from '../spotify';
import React, { useEffect } from 'react'
import axios from 'axios';
import Login from './Login';
// import { SpotifyAPIContext } from 'react-spotify-api'

export const SpotifyAPIContext = React.createContext();

const SpotifyAPIProvider = ({ children }) => {
  const [token, setToken] = React.useState(null)

  useEffect(() => {
    if (accessToken) {
      setHeaders()
      .then(token => setToken(accessToken))
      console.log(accessToken);
    } else {
      console.log('efsrgdthfntdgrsefsgrd');
    }
  }, [token])
  return (
    <>
      {token ? (
        <SpotifyAPIContext.Provider value={token}>
          {children}
        </SpotifyAPIContext.Provider>
      ) : (
        <Login />
      )}
    </>
  )
};

export default SpotifyAPIProvider;
