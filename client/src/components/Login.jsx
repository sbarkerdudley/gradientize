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
        background: rgb(0,7,255);
        background: linear-gradient(120deg, rgba(0,7,255,1), rgba(0,7,255,1) 8%, rgba(133,0,255,1), rgba(205,0,0,1), rgba(205,60,0,1), rgba(255,167,0,1), rgba(255,254,0,1), rgba(0,255,60,1), rgba(0,145,255,1), rgba(0,7,255,1), rgba(120,7,255,1), rgba(220,0,45,1), rgba(133,0,255,1));
        background-size: 600% 200%;
        animation: gradient 20s ease infinite;
        top: -1vh;
        left: -1vw;
        z-index: 0;
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