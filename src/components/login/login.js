import React from "react";

import { Container } from "react-bootstrap";
import "./login.css";
import { accessUrl } from "./spotifyAuth";

const Login = () => {
  return (
    //d-flex justify-content-center align-items-center text-center
    <Container className="login-area">
      <img
        className="spotify-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={accessUrl} className="btn btn-success btn-lg login-button">
        LOGIN WITH SPOTIFY
      </a>
    </Container>
  );
};

export default Login;
