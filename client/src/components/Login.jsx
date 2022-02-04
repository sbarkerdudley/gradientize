import React from 'react';
import {
  Gradient,
  LoginButton,
} from './';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


const Login = () => {

  return (
    <Gradient>
      <div className='container'
        css={css`
      background-color: rgba(0,0,0,0.34);
      color: hotpink;
      display: grid;
      place-items: center;
      position: absolute;
      width: 100vw;
      height: 80vh;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);Ï
    `}
      >
        <header>
          <h1>
            <strong>
              <em>
                GRADIENTIZE
              </em>
            </strong>
          </h1>
        </header>

        <LoginButton />
      </div>
    </Gradient>

  )
};

export default Login;
