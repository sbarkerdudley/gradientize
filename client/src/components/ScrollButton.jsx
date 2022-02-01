import React, { useLayoutEffect } from 'react';
import ButtonGenerator from './Buttons';
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
  let [display, setDisplay] = React.useState('none')


  React.useEffect(() => {
    handleScroll()
  }, [])

  React.useLayoutEffect(() => {
    setDisplay(top < 1 ? 'none' : 'block')
    handleScroll()
  }, [scrollTo, window.scrollY])

  return (
    <div className='scroll-to-top'
      css={css`
        position: 'absolute';
        zIndex: 2000;
        margin: 3rem;
        padding: '3rem';
        top: 90vh;
        left: 90vw;
        cursor: 'pointer';

      `}
    >
      <ButtonGenerator
        sx={{
          position: 'relative',
          margin: 'auto',
          // display: {(top < 10) ? 'none' : 'block'}
          display
        }}
        className='scroll'
        onClick={handleScroll}
        label={'Scroll To Top'}
      />
    </div>
  )
};

export default ScrollButton;