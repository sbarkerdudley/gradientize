import React, { useState } from 'react';

/**
 *
 * `GET /recommendations` target search parameters.
 *
 * @param {number} min_danceability     0>= value <= 1
 * @param {number} max_danceability     0>= value <= 1
 * @param {number} target_danceability  0>= value <= 1
 *
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations
 *
 */

const _keys = [
  ['acousticness', 'acousticness'],
  ['danceability', 'danceability'],
  ['energy', 'energy'],
  ['instrumentalness', 'instrumentalness'],
  ['liveness', 'liveness'],
  ['loudness', 'loudness'],
  ['popularity', 'popularity'],
  ['vocalness', 'speechiness'],
  ['tempo', 'tempo'],
  ['cheerfulness', 'valence'],
];

function formatParams() {
  const params = Object.create(null);

  _keys.forEach(
    ([key, _key]) =>
      (params[key] = {
        label: `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`,
        min: {
          key: `min_${_key}`,
          value: 0,
        },
        max: {
          key: `max_${_key}`,
          value: 1,
        },
        target: {
          key: `target_${_key}`,
          value: 0.5,
        },
        enabled: false,
      }),
  );

  return params;
}

const PARAMS = formatParams();

export default function useSoundSliders() {
  const [sliders, setSliders] = useState(PARAMS);
  // update one slider, preserve the rest

  const setMin = (key, value) =>
    setSliders((sliders) => {
      sliders[key]['min']['value'] = value / 10;
      console.log(sliders[key]);
      return sliders;
    });

  const setMax = (key, value) =>
    setSliders((sliders) => {
      let float = Math.round(Math.max(Math.min(value / 10, 10), 0));
      sliders[key]['enabled'] = true;
      sliders[key]['max']['value'] = float / 10;
      console.log(sliders[key]);
      return sliders;
    });

  const setRange = (key, tuple) =>
    setSliders((sliders) => {
      let floats = tuple.map(
        (value) => Math.round(Math.max(Math.min(value / 10, 10), 0)) / 10,
      );
      console.log(floats);
      sliders[key]['range']['value'] = float / 10;
      console.log(sliders[key]);
      return sliders;
      // if max - min is greater than 80%, skip
      // maybe easier to switch to single value sliders
    });

  const toggle = (key) =>
    setSliders((sliders) => (sliders[key].enabled = !sliders[key].enabled));

  return [
    sliders,
    {
      setMin,
      setMax,
      setRange,
      toggle,
    },
    Object.entries(sliders),
  ];
}
