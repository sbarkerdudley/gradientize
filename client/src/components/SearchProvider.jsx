import React, { useState, useEffect } from 'react';
import { useList, useSoundSliders } from '../hooks';
import { Seeds } from './Seeds';

export const SearchContext = React.createContext({});

export default function SearchProvider({ children }) {

  const [seeds, useSeeds] = useList()
  // const [sliders, useSliders, SLIDERS] = useSoundSliders()
  // console.log(sliders, SLIDERS);
  React.useEffect(() => {
  }, [])


  const query = {
    seeds,
    useSeeds,
  };

  return (
    <SearchContext.Provider value={query}>
      {children}
    </SearchContext.Provider>
  )
}

// export const WrappedSliders = React.createElement(SearchProvider, {}, React.createElement(Seeds, {}, null))