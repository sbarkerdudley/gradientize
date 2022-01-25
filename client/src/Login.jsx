import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const SpotifyLogo = () => <img src='spotify.svg' />

const Login = ({ children }) => {
  // TODO: Style this, handle logic in provider
  console.log('thi sis qworking');
  return (
    // <div className='login'>
    <div
      className='login'
      css={css`
        width: 102vw;
        height: 102vh;
        margin: auto;
        display: grid;
        // position: fixed;
        overflow: hidden;
        overscroll-behavior: none;
        text-align: center;
        -webkit-overscroll-behavior: none;
        place-items: center;
        background: linear-gradient(0deg, hsla(20, 100%, 50%, 1),hsla(40, 100%, 50%, 0.6) 31%, hsla(60, 100%, 50%, 0.0) 72%),
        linear-gradient(60deg, rgb(0, 89, 255),hsla(160, 100%, 50%, 0.6) 31%, hsla(180, 100%, 50%, 0.0) 72%),
        linear-gradient(120deg, hsl(226, 100%, 50%),hsla(220, 100%, 50%, 0.6) 31%, hsla(240, 100%, 50%, 0.0) 72%),
        linear-gradient(240deg, hsl(271, 100%, 50%),hsla(280, 100%, 50%, 0.6) 31%, hsla(300, 100%, 50%, 0.0) 72%),
        linear-gradient(300deg, hsla(300, 100%, 50%, 1),hsla(280, 100%, 50%, 0.6) 31%, hsla(300, 100%, 50%, 0.0) 72%);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        top: -1vh;
        left: -1vw;
        z-index: 0;
        padding: 0;
        @keyframes gradient {
          0% {
            background-position: 0% 100%;
          }
          25% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 0%;
          }
          75% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
      `}
    >
      <div>
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
        <img src='./spotify.svg'/>
      </div>
      {children}
    </div>
  )
};

export default Login;


/*

import { jsx, css, Global, ClassNames } from '@emotion/react'

render(
  <div css={{ color: 'hotpink' }}>
    <div
      css={css`
        color: green;
      `}
    />
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0
        }
      }}
    />
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            'some-class',
            css`
              color: yellow;
            `
          )}
        />
      )}
    </ClassNames>
  </div>
)
```

More documentation is available at https://emotion.sh.


 */