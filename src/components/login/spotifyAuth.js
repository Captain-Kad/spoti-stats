export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-follow-read",
  "user-library-read",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-playback-position",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-email",
  "user-read-private",
  "user-top-read",
];

export const getToken = () => { //gets the access token from the hash
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
