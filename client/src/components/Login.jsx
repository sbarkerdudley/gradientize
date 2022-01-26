import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const SpotifyLogo = () => <img src='spotify.svg' />

const Login = ({ children }) => {
  // TODO: Style this, handle logic in provider
  return (
    <>
    <div
      className='login'
      css={css`
        width: 110vw;
        height: 110vh;
        margin: auto;
        display: grid;
        position: fixed;
        overflow-y: hidden;
        overscroll-behavior: none;
        -webkit-overscroll-behavior: none;
        text-align: center;
        -webkit-overscroll-behavior: none;
        place-items: center;
        background: rgb(0,7,255);
        background: linear-gradient(120deg, rgba(0,7,255,1), rgba(0,7,255,1) 8%, rgba(133,0,255,1), rgba(205,0,0,1), rgba(205,60,0,1), rgba(255,167,0,1), rgba(255,254,0,1), rgba(0,255,60,1), rgba(0,145,255,1), rgba(0,7,255,1), rgba(120,7,255,1), rgba(220,0,45,1), rgba(133,0,255,1));
        filter: blur(30px);
        background-size: 600% 200%;
        animation: gradient 40s ease infinite;
        top: -5vh;
        left: -5vw;
        z-index: 10;
        padding: 0;
        @keyframes gradient {
          0% {
            background-position: left;
          }
          50% {
            background-position: right;
          }
          100% {
            background-position: left;
          }

        }
      `}
    >
        <h1>
          <strong>

          <em>
            GRADIENTIZE
          </em>
          </strong>
        </h1>
      <button
        onClick={
          () => window.open('http://localhost:3000/login')
        }
      >Login</button>
        <SpotifyLogo />

      {children}
    </div>
    <div className='container'
    css={css`
      background-color: rgba(0,0,0,0.4);
      position: absolute;
      width: 100vw;
      height: 70vh;
      filter: blur(0px);
      z-index:10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  >
    </div>
    </>
  )
};

export default Login;
