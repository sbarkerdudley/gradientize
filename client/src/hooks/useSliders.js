import React from 'react';

/**
 *
 * @param {number} min_danceability     0>= value <= 1
 * @param {number} max_danceability     0>= value <= 1
 * @param {number} target_danceability  0>= value <= 1
 *
 *
 * EXCEPTIONS:
 *
 */

const params = [
  // 'seed_artists',
  // 'seed_genres',
  // 'seed_tracks',
  // 'limit',
  // 'market',
  'max_acousticness',
  'max_danceability',
  'max_duration_ms',
  'max_energy',
  'max_instrumentalness',
  'max_key',
  'max_liveness',
  'max_loudness',
  'max_mode',
  'max_popularity',
  'max_speechiness',
  'max_tempo',
  'max_time_signature',
  'max_valence',
  'min_acousticness',
  'min_danceability',
  'min_duration_ms',
  'min_energy',
  'min_instrumentalness',
  'min_key',
  'min_liveness',
  'min_loudness',
  'min_mode',
  'min_popularity',
  'min_speechiness',
  'min_tempo',
  'min_time_signature',
  'min_valence',
  'target_acousticness',
  'target_danceability',
  'target_duration_ms',
  'target_energy',
  'target_instrumentalness',
  'target_key',
  'target_liveness',
  'target_loudness',
  'target_mode',
  'target_popularity',
  'target_speechiness',
  'target_tempo',
  'target_time_signature',
  'target_valence',
];

const queryParams = {
  acousticness: {
    min: {
      key: 'min_acousticness',
      value: 0,
    },
    max: {
      key: 'max_acousticness',
      value: 1,
    },
    target: {
      key: 'target_acousticness',
      value: 0.5,
    },
    enabled: true,
  },
  danceability: {
    min: {
      key: 'min_danceability',
      value: 0,
    },
    max: {
      key: 'max_danceability',
      value: 1,
    },
    target: {
      key: 'target_danceability',
      value: 0.5,
    },
    enabled: true,
  },
  duration_ms: {
    min: {
      key: 'min_duration_ms',
      value: 0,
    },
    max: {
      key: 'max_duration_ms',
      value: 1,
    },
    target: {
      key: 'target_duration_ms',
      value: 0.5,
    },
    enabled: true,
  },
  energy: {
    min: {
      key: 'min_energy',
      value: 0,
    },
    max: {
      key: 'max_energy',
      value: 1,
    },
    target: {
      key: 'target_energy',
      value: 0.5,
    },
    enabled: true,
  },
  instrumentalness: {
    min: {
      key: 'min_instrumentalness',
      value: 0,
    },
    max: {
      key: 'max_instrumentalness',
      value: 1,
    },
    target: {
      key: 'target_instrumentalness',
      value: 0.5,
    },
    enabled: true,
  },
  key: {
    min: {
      key: 'min_key',
      value: 0,
    },
    max: {
      key: 'max_key',
      value: 1,
    },
    target: {
      key: 'target_key',
      value: 0.5,
    },
    enabled: true,
  },
  liveness: {
    min: {
      key: 'min_liveness',
      value: 0,
    },
    max: {
      key: 'max_liveness',
      value: 1,
    },
    target: {
      key: 'target_liveness',
      value: 0.5,
    },
    enabled: true,
  },
  loudness: {
    min: {
      key: 'min_loudness',
      value: 0,
    },
    max: {
      key: 'max_loudness',
      value: 1,
    },
    target: {
      key: 'target_loudness',
      value: 0.5,
    },
    enabled: true,
  },
  mode: {
    min: {
      key: 'min_mode',
      value: 0,
    },
    max: {
      key: 'max_mode',
      value: 1,
    },
    target: {
      key: 'target_mode',
      value: 0.5,
    },
    enabled: true,
  },
  popularity: {
    min: {
      key: 'min_popularity',
      value: 0,
    },
    max: {
      key: 'max_popularity',
      value: 1,
    },
    target: {
      key: 'target_popularity',
      value: 0.5,
    },
    enabled: true,
  },
  speechiness: {
    min: {
      key: 'min_speechiness',
      value: 0,
    },
    max: {
      key: 'max_speechiness',
      value: 1,
    },
    target: {
      key: 'target_speechiness',
      value: 0.5,
    },
    enabled: true,
  },
  tempo: {
    min: {
      key: 'min_tempo',
      value: 0,
    },
    max: {
      key: 'max_tempo',
      value: 1,
    },
    target: {
      key: 'target_tempo',
      value: 0.5,
    },
    enabled: true,
  },
  time_signature: {
    min: {
      key: 'min_time_signature',
      value: 0,
    },
    max: {
      key: 'max_time_signature',
      value: 1,
    },
    target: {
      key: 'target_time_signature',
      value: 0.5,
    },
    enabled: true,
  },
  valence: {
    min: {
      key: 'min_valence',
      value: 0,
    },
    max: {
      key: 'max_valence',
      value: 1,
    },
    target: {
      key: 'target_valence',
      value: 0.5,
    },
    enabled: true,
  },
};

const _keys = [
  'acousticness',
  'danceability',
  // 'duration_ms',
  'energy',
  'instrumentalness',
  'key',
  'liveness',
  'loudness',
  'mode',
  'popularity',
  'speechiness',
  'tempo',
  // 'time_signature',
  'valence',
];

const formatParams = () => {
  const params = Object.create(null);

  _keys.forEach(
    (k) =>
      (params[k] = {
        label: `${k.slice(0).toUpperCase()}${k.slice(1)}`,
        min: {
          key: `min_${k}`,
          value: 0,
        },
        max: {
          key: `max_${k}`,
          value: 1,
        },
        target: {
          key: `target_${k}`,
          value: 0.5,
        },
        enabled: false,
      }),
  );

  return params;
};

const PARAMS = formatParams();
