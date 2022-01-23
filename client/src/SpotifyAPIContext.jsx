import 'react-spotify-auth/dist/index.css'
import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import { CLIENT_ID, CLIENT_SECRET } from '../../config.js'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import axios from 'axios'

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
        <div className='login'>
        <SpotifyAuth
          // localStorage={true}
          redirectUri='http://localhost:3000/auth/spotify/callback'
          clientID={CLIENT_ID}
          scopes={[Scopes.userReadPrivate, 'user-read-email']}
          onAccessToken={(token) => { console.log(token); setToken(token) }}
        />
        </div>
      )}
    </div>
  )
}
export default SpotifyAPIContext;
