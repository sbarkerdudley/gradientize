const logout = () => {

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
