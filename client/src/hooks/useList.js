import React, { useState } from 'react';

/**
 *
 * Spotify's `GET /recommendations` endpoint accepts any combination of up to 5 'seed' values
 * to generate recommendations. [Spotify IDs] are 22 character, base-62 identifiers to represent:
 *
 * @param {string} seed_artists
 * @param {string}  seed_genres
 * @param {string}  seed_tracks
 *
 * i.e. '2NJ0qZ1UNsiESTmFSQDkT1'
 *
 * About Spotify IDs:
 * - https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids
 * About `/recommendations`:
 * - https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations
 *
 */

const QUERY_KEYS = {
  artist: 'seed_artists',
  album: 'seed_artists',
  genre: 'seed_genres',
  track: 'seed_tracks',
};

const INITIAL_SIZE = 5;
const FILLER = Array(INITIAL_SIZE).fill({});

var IDS = new Set();

function persistSeeds(dataArray) {
  window.localStorage.setItem('seeds', JSON.stringify(dataArray));
}

function getSeeds() {
  var seeds = window.localStorage.getItem('seeds');
  if (seeds) {
    seeds = JSON.parse(seeds);
    IDS = dedupe(seeds);
  }
  return seeds || FILLER;
}

function dedupe(list) {
  return new Set(list.map((seed) => seed.id));
}

export default function useList(initialArray = getSeeds()) {
  const [list, setList] = useState(initialArray);

  const prepend = (seed) =>
    setList((list) => {
      if (typeof seed.id === 'string' && IDS.has(seed.id)) {
        return list;
      }
      const copy = [seed, ...list, ...FILLER];
      copy.length = INITIAL_SIZE;
      IDS = dedupe(copy);
      persistSeeds(copy);

      return copy;
    });

  const pop = () =>
    setList((list) => {
      const copy = [{}, ...list.slice(0, -1)];
      return copy;
    });

  const splice = (target) =>
    setList((list) => {
      var copy = list.slice().filter((item) => item.id !== target.id);
      copy = [...copy, ...FILLER];
      copy.length = INITIAL_SIZE;
      persistSeeds(copy);
      IDS = dedupe(copy);
      return copy;
    });

  const aggregateQuery = () => {
    const copy = list.slice();
    let mappedObject = copy.reduce((agg, obj) => {

      let key = QUERY_KEYS[obj.type];
      agg[key] ? (agg[key] = [...agg[key], obj.id]) : (agg[key] = [obj.id]);

      console.log(agg);
      delete agg.undefined;
      return agg;
    }, Object.create(null));

    // TODO - add get method to add most popular track to seeds instead of album, OR add artist id with album image
    console.log({result});
  };

  return [
    list,
    {
      prepend,
      pop,
      splice,
      aggregateQuery,
    },
  ];
}
