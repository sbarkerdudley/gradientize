import { CLIENT_ID, CLIENT_SECRET } from '../../config.js'
import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import axios from 'axios'

const SpotifyAPIContext = (props) => {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
  return (
    <div className='api-context'>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
          {/* <p>You are authorized with token: {token}</p> */}
          {props.children}
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          localStorage={true}
          redirectUri='http://localhost:3000/auth/spotify/callback'
          clientID={CLIENT_ID}
          scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
          onAccessToken={(token) => { console.log(token); setToken(token) }}
        />
      )}
    </div>
  )
}
export default SpotifyAPIContext;


// process.env.CLIENT_ID
// process.env.CLIENT_SECRET
