import React from "react";

import { Container } from "react-bootstrap";
import "./login.css";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
  return (
    //d-flex justify-content-center align-items-center text-center
    <Container className="login-area">
      <img
        className="spotify-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={AUTH_URL} className="btn btn-success btn-lg login-button">
        LOGIN WITH SPOTIFY
      </a>
    </Container>
  );
};

export default Login;
