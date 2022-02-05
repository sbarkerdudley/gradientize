import React, { useLayoutEffect } from 'react';
import { ButtonGenerator } from './';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

function handleScroll() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

}

const ScrollButton = () => {

  let [top, setTop] = React.useState(window.scrollY)

  let display = (top < 10) ? 'none' : 'block'


  React.useEffect(() => {
    handleScroll()
  }, [])

  React.useLayoutEffect(() => {
    // setDisplay(top < 1 ? 'none' : 'block')
    handleScroll()
  }, [scrollTo, window.scrollY])

  return (
    <div className='scroll-to-top'
      css={css`
        position: 'absolute';
        zIndex: 2000;

        padding: '3rem';
        top: 10vh;
        left: 10vw;
        cursor: 'pointer';

      `}
    >
      <ButtonGenerator
        sx={{
          position: 'absolute',

          zIndex: 2000,
          padding: '3rem',
          top: '10vh',
          left: '10vw',
          cursor: 'pointer',
          margin: 'auto',
          display,
        }}
        className='scroll'
        onClick={handleScroll}
        label={'Scroll To Top'}
      />
    </div>
  )
};

export default ScrollButton;