import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../images/spotify-login-logo.jpg";
import { accessUrl } from "./spotifyAuth";

const Login = () => {
  return (
    <LoginContainer>
      <LoginLogo className="spotify-logo" src={logo} alt="" />
      <LoginButton href={accessUrl} className="btn btn-success btn-lg">
        LOGIN WITH SPOTIFY
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginLogo = styled.img`
  margin-top: -200px;
  margin-bottom: 100px;
  width: 40%;
`;

const LoginButton = styled.a`
  color: white;
  font-weight: 700;
  padding: 15px 30px;
  background-color: #1db954;
  border-radius: 99px;
  width: 15%;
`;
