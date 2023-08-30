import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login";
import { getToken } from "./components/login/spotifyAuth";
import HomePage from "./components/homepage/homepage";
import { useDataLayerValue } from "./dataLayer";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token, user, recently_played_tracks }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    // set the token
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotifyApi.getMyRecentlyPlayedTracks().then((recently_played_tracks) => {
        dispatch({
          type: "SET_RECENTLY_PLAYED_TRACKS",
          recently_played_tracks: recently_played_tracks,
        });
      });
    }
  }, []);

  // console.log(user);
  console.log(recently_played_tracks);

  return (
    <div className="app">
      {token ? <HomePage spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
};

export default App;
