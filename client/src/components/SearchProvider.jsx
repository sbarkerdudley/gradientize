import React, { useState, useEffect } from 'react';
import { useList } from '../hooks/useList';
import Seeds from './Seeds';
import axios from 'axios';

export const SearchContext = React.createContext({});

export default function SearchProvider({ children }) {

  const [seeds, useSeeds] = useList()

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
