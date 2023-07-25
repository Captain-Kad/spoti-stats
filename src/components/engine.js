import React, { useState, useEffect } from "react";
import axios from "axios";

const Engine = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const fullLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      //prompts user to authenticate by logging in with a spotify account
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token); //sets user token after authentication assuming user has a spotify account(free or premium)
  }, []);

  const logOut = () => {
    //removes user token hence logging the user out
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    //retrieves artist data
    e.preventDefault();
    const data = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.data.artists.items[0]);
    console.log(data);
    console.log(data.data.artists.items);
  };

  const renderArtists = (artist) => {
    return (
      <div>
        {artist.images ? (
          <img width={"40%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image Available</div>
        )}
        {artist.name}
      </div>
    );
  };

  return (
    <div>
      {!token ? ( //if no token is available, prompts user to login
        <a href={fullLink}>Login to Spotify</a>
      ) : (
        //provides the option for the user to logout once user is logged in
        <button onClick={logOut}>Log Out</button>
      )}

          {!searchKey ? (
        console.log("no search key")
          ) : (
                  console.log(searchKey)
          )}  
      
      {token ? (
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      ) : (
        <h2>Please Login</h2>
      )}

      {renderArtists(artists)}
    </div>
  );
};

export default Engine;
