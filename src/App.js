import React from "react";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login";
import { getToken } from "./components/login/spotifyAuth";
import HomePage from "./components/homepage/homepage";
import { useDataLayerValue } from "./dataLayer";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token, user, current_playing_track }, dispatch] =
    useDataLayerValue();

  useEffect(
    () => {
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

        spotifyApi.getMyCurrentPlayingTrack().then((current_playing_track) => {
          dispatch({
            type: "SET_CURRENT_PLAYING_TRACK",
            current_playing_track: current_playing_track,
          });
        });
      }
    } //[]
  );

  // console.log(user);
  console.log(current_playing_track);

  return (
    <div className="app">
      {token ? <HomePage spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
};

export default App;
