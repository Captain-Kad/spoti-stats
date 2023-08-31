import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login";
import { getToken } from "./components/login/spotifyAuth";
import HomePage from "./components/homepage/homepage";
import { useDataLayerValue } from "./dataLayer";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState("");
  const [{ user, recently_played_tracks }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Try to get token from localStorage
    // const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (token) {
      setToken(token);
      spotifyApi.setAccessToken(token);
      window.location.hash = "";

      // Fetch user and recently played tracks
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
    } else {
      // Try to get token from URL hash
      const hash = getToken();
      if (hash.access_token) {
        const accessToken = hash.access_token;
        setToken(accessToken);
        spotifyApi.setAccessToken(accessToken);

        // Store token in localStorage
        window.localStorage.setItem("token", accessToken);
      }
    }
  }, [dispatch]);

  // console.log(user);
  // console.log(recently_played_tracks);

  return (
    <div className="app">
      {token ? <HomePage spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
};

export default App;
