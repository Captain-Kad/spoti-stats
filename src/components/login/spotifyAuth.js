// Constants for authentication
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"; // Spotify authorization endpoint
const REDIRECT_URI = "http://localhost:3000"; // Redirect URI after successful authentication
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID; // Spotify client ID, fetched from environment variable

// List of scopes required for the Spotify API access
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

// Function to extract the access token from the URL hash
export const getToken = () => {
  return window.location.hash
    .substring(1) // Remove the '#' symbol from the hash
    .split("&") // Split the hash by '&', creating an array of key-value pairs
    .reduce((initial, item) => {
      const parts = item.split("="); // Split the key-value pair into an array
      initial[parts[0]] = decodeURIComponent(parts[1]); // Decode URI components and assign them to the object

      return initial;
    }, {});
};

// Construct the access URL for Spotify authorization
export const accessUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
