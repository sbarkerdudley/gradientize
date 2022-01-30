import axios from 'axios';

const baseURL = 'http://api.spotify.com/v1';

const logout = () => {

}

export const getUserProfile = async () => {
  if (accessToken) {

    let profile = await axios.get(baseURL + '/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
        'Access-Control-Allow-Origin': '*/*'
      }
    })
    return profile;
  } return null
}


const getAccessToken = () => {
  const querystring = window.location.search;
  const urlParams = new URLSearchParams(querystring);
  const accessToken = urlParams.get('access_token');
  return accessToken;
};

const getRefreshToken = () => {
  const querystring = window.location.search;
  const urlParams = new URLSearchParams(querystring);
  const refreshToken = urlParams.get('refresh_token');
  return refreshToken;
};



export const accessToken = getAccessToken();

export const refreshToken = getRefreshToken();
