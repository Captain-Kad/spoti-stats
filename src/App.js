import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/login";
import { getToken } from "./components/login/spotifyAuth";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // set the token
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    // console.log(_token);
  }, []);

  return (
    <div className="app">{token ? <h1>You are logged in</h1> : <Login />}</div>
  );
};

export default App;
