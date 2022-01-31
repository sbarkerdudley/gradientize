import React, { useLayoutEffect } from 'react';
import ButtonGenerator from './Buttons';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


const ScrollButton = () => {

  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

  }

  React.useLayoutEffect(() => {
    handleScroll()
  }, [scrollTo])

  return (
    <div className='scroll-to-top'
      css={css`
        position: 'fixed';
        display: block;
        zIndex: 2000;
        margin: 3rem;
        padding: '3rem';
        top: 50vw;
        left: 50vw;
        cursor: 'pointer';

      `}
    >
      <ButtonGenerator
        className='scroll'
        onClick={handleScroll}
      >
        Scroll To Top
      </ButtonGenerator>
    </div>
  )
};

export default ScrollButton;