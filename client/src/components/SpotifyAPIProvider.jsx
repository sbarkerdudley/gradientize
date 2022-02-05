import { accessToken, setHeaders } from '../spotify';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import axios from 'axios';
import Login from './Login';
// import { SpotifyAPIContext } from 'react-spotify-api'

export const SpotifyAPIContext = React.createContext();

export default function SpotifyAPIProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = React.useState(null)

  useEffect(() => {
    if (typeof accessToken === 'string') {
      setHeaders()
        .then(token => setToken(accessToken))
        .then(() => navigate('/login'))
      console.log(accessToken);
    } else {
      console.log('efsrgdthfntdgrsefsgrd');
    }
  }, [accessToken, token])
  return (
    <>
      {token ? (
        <SpotifyAPIContext.Provider value={token}>
          {children}
        </SpotifyAPIContext.Provider>
      ) : (
        // <Navigate to='/login'>
          <Login />
        // </Navigate>
      )}
    </>
  )
};

