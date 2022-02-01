import React, { useEffect, useContext } from 'react';
import { SimpleGrid } from '@mantine/core';
import { SearchContext } from './SearchProvider';
import Thumb from './Thumb';
import { useList } from '../hooks/useList';

const params = ['seed_artists', 'seed_genres', 'seed_tracks', 'limit', 'market', 'max_acousticness', 'max_danceability', 'max_duration_ms', 'max_energy', 'max_instrumentalness', 'max_key', 'max_liveness', 'max_loudness', 'max_mode', 'max_popularity', 'max_speechiness', 'max_tempo', 'max_time_signature', 'max_valence', 'min_acousticness', 'min_danceability', 'min_duration_ms', 'min_energy', 'min_instrumentalness', 'min_key', 'min_liveness', 'min_loudness', 'min_mode', 'min_popularity', 'min_speechiness', 'min_tempo', 'min_time_signature', 'min_valence', 'target_acousticness', 'target_danceability', 'target_duration_ms', 'target_energy', 'target_instrumentalness', 'target_key', 'target_liveness', 'target_loudness', 'target_mode', 'target_popularity', 'target_speechiness', 'target_tempo', 'target_time_signature', 'target_valence']

export default React.memo(function Seeds() {
  const { seeds } = useContext(SearchContext);

  useEffect(() => {


  }, [])

  if (!Array.isArray(seeds)) {
    return <></>
  }

  return (
    <SimpleGrid cols={5}>
      {seeds.map((seed, i) => (
        <Thumb parent='seeds' id={seed.id || null} img={seed.img || null} key={i} />
      ))}
    </SimpleGrid>
  )
})