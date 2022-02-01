import React from 'react';
import { SimpleGrid } from '@mantine/core';
import Thumb from './Thumb'
import Nav from './AppHeader'

const params = ['seed_artists', 'seed_genres', 'seed_tracks', 'limit', 'market', 'max_acousticness', 'max_danceability', 'max_duration_ms', 'max_energy', 'max_instrumentalness', 'max_key', 'max_liveness', 'max_loudness', 'max_mode', 'max_popularity', 'max_speechiness', 'max_tempo', 'max_time_signature', 'max_valence', 'min_acousticness', 'min_danceability', 'min_duration_ms', 'min_energy', 'min_instrumentalness', 'min_key', 'min_liveness', 'min_loudness', 'min_mode', 'min_popularity', 'min_speechiness', 'min_tempo', 'min_time_signature', 'min_valence', 'target_acousticness', 'target_danceability', 'target_duration_ms', 'target_energy', 'target_instrumentalness', 'target_key', 'target_liveness', 'target_loudness', 'target_mode', 'target_popularity', 'target_speechiness', 'target_tempo', 'target_time_signature', 'target_valence']

export default function Seeds() {

  return (
      <SimpleGrid cols={5}>
        <Thumb album={{}} id={0} img={'https://i.scdn.co/image/ab67616d00004851d8a291bea8233c2f022916c3'}></Thumb>
        <Thumb album={{}} id={0} img={'https://i.scdn.co/image/ab67616d00004851d8a291bea8233c2f022916c3'}></Thumb>
        <Thumb album={{}} id={0} img={'https://i.scdn.co/image/ab67616d00004851d8a291bea8233c2f022916c3'}></Thumb>
        <Thumb album={{}} id={0} img={null}></Thumb>
        <Thumb album={{}} id={0} img={'https://i.scdn.co/image/ab67616d00004851d8a291bea8233c2f022916c3'}></Thumb>
      </SimpleGrid>
  )
}