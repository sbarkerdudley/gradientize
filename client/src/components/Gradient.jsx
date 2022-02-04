import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


export default function Gradient({ children }) {

  return (
    <div
      className='animated-gradient'
      css={css`
        width: 110vw;
        height: 110vh;
        margin: auto;
        display: grid;
        position: fixed;
        overscroll-behavior: none;
        -webkit-overscroll-behavior: none;
        text-align: center;
        place-items: center;
        background: linear-gradient(120deg, rgba(0,7,255,1), rgba(0,7,255,1) 8%, rgba(133,0,255,1), rgba(205,0,0,1), rgba(205,60,0,1), rgba(255,167,0,1), rgba(255,254,0,1), rgba(0,255,60,1), rgba(0,145,255,1), rgba(0,7,255,1), rgba(120,7,255,1), rgba(220,0,45,1), rgba(133,0,255,1));
        background-size: 600% 200%;
        animation: gradient 40s ease infinite;
        top: -5vh;
        left: -5vw;
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
      {children}
    </div>
  )
};
