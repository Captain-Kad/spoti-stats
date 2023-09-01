import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login";
import { getToken } from "./components/login/spotifyAuth";
import { useDataLayerValue } from "./dataLayer";
import MainPage from "./components/mainPage/mainpage";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState("");
  const [{ user, recently_played_tracks, top_artists, top_tracks }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    // Try to get token from localStorage
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

      spotifyApi
        .getMyTopArtists({ limit: 50, time_range: "long_term" })
        .then((top_artists) => {
          dispatch({
            type: "SET_TOP_ARTISTS",
            top_artists: top_artists,
          });
        });

      spotifyApi
        .getMyTopTracks({ limit: 50, time_range: "long_term" })
        .then((top_tracks) => {
          dispatch({
            type: "SET_TOP_TRACKS",
            top_tracks: top_tracks,
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
  // console.log(top_artists);
  console.log(top_tracks);

  return <div className="app">{token ? <MainPage /> : <Login />}</div>;
};

export default App;
