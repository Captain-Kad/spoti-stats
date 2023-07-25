import React, { useState, useEffect } from "react";

const Engine = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const fullLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

  const [token, setToken] = useState("");

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

  return (
    <div>
      {!token ? ( //if no token is available, prompts user to login
        <a href={fullLink}>Login to Spotify</a>
      ) : (
        //provides the option for the user to logout once user is logged in
        <button onClick={logOut}>Log Out</button>
      )}
    </div>
  );
};

export default Engine;
