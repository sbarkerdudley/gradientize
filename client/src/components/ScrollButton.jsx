import React, { useEffect, useState } from 'react';

const ScrollButton = () => {
  if (!window || !document) return <></>

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
    <button
      style={{
        position: 'fixed',
        zIndex: 200,
        top: 'calc(100vh - 300px)',
        left: 'calc(100vw - 300px)',
        padding: '3rem',
        cursor: 'pointer',
      }}
      className='scroll'
      onClick={handleScroll}
    >
      Scroll To Top
    </button>
  )
};

export default ScrollButton;