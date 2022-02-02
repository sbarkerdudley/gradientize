import axios from 'axios';

const LOCALSTORAGE_KEYS = {
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  expireTime: 'spotify_token_expire_time',
  timestamp: 'spotify_token_timestamp',
};

const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};

async function refreshToken() {
  try {
    // Logout if there's no refresh token stored or we've managed to get into a reload infinite loop
    console.log('refreshtoken caled......');
    if (
      !LOCALSTORAGE_VALUES.refreshToken ||
      LOCALSTORAGE_VALUES.refreshToken === 'undefined' ||
      Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000 < 1000
    ) {
      console.error('No refresh token available');
      await logout();
      return;
    }

    // Use `/refresh_token` endpoint from our Node app
    await setHeaders();
    console.log('headers set ......');
    const { data } = await axios.get(
      `/auth/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`,
      );

      // Update localStorage values
      window.localStorage.setItem(
        LOCALSTORAGE_KEYS.accessToken,
        data.access_token,
        );
        console.log('rrsfesgh tooken gotten ;);)');
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

        // Reload the page for localStorage updates to be reflected
        window.location.reload();
      } catch (e) {
        console.log('oh shits;)');
        console.error(e);
      }
}

function hasTokenExpired() {
  const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;
  if (!accessToken || !timestamp) {
    return false;
  }
  const millisecondsElapsed = Date.now() - Number(timestamp);
  return millisecondsElapsed / 1000 > Number(expireTime);
}

function getAccessToken() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  };
  const error = urlParams.get('error');

  // If there's an error OR the token in localStorage has expired, refresh the token
  if (
    error ||
    hasTokenExpired() ||
    typeof LOCALSTORAGE_VALUES.accessToken === 'undefined'
  ) {
    refreshToken();
  }

  // If there is a valid access token in localStorage, use that
  if (
    LOCALSTORAGE_VALUES.accessToken &&
    LOCALSTORAGE_VALUES.accessToken !== 'undefined'
  ) {
    return LOCALSTORAGE_VALUES.accessToken;
  }

  // If there is a token in the URL query params, user is logging in for the first time
  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    // Store the query params in localStorage
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property]);
    }
    // Set timestamp
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
    // Return access token from query params
    return queryParams[LOCALSTORAGE_KEYS.accessToken];
  }

  // We should never get here!
  return false;
}

export const accessToken = getAccessToken();

export async function getUserProfile() {
  await accessToken;
  return axios.get('/me').then((response) => response.data);
}

export function logout() {
  window.localStorage.clear()
  // for (const property in LOCALSTORAGE_KEYS) {
  //   window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
  // }
  window.location = window.location.origin;
}

async function setHeaders(attempts = 3) {
  if (accessToken) {
    console.log(accessToken);
    axios.defaults.baseURL = 'https://api.spotify.com/v1';
    axios.defaults.headers[
      'Authorization'
    ] = `Bearer ${LOCALSTORAGE_VALUES.accessToken}`;
    axios.defaults.headers['Content-Type'] = 'application/json';
    console.log('Successfully acquired access_token');
    return await accessToken;
  } else if (attempts--) {
    console.log(`No access_token available. Attempts remaining: ${attempts}`);
    await setTimeout(() => {
      setHeaders(attempts);
    }, 1000);
  }
}

(function init() {
  console.log('init');
  setHeaders();

})();
