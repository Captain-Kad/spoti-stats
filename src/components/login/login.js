// Import necessary modules from React and other libraries
import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Import the Spotify login logo image and the access URL from the SpotifyAuth module
import logo from "../../images/spotify-login-logo.jpg";
import { accessUrl } from "./spotifyAuth";

// Functional component for the login page
const Login = () => {
  return (
    // Container to center the login elements vertically on the screen
    <LoginContainer>
      {/* Spotify logo displayed on the login page */}
      <LoginLogo className="spotify-logo" src={logo} alt="" />

      {/* Login button to initiate Spotify authentication */}
      <LoginButton href={accessUrl} className="btn btn-success btn-lg">
        LOGIN WITH SPOTIFY
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;

// Styled component to style the login container
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Set the height of the container to 100% of the viewport height
`;

// Styled component to style the Spotify logo image
const LoginLogo = styled.img`
  margin-top: -200px; // Adjust the top margin to position the logo
  margin-bottom: 100px; // Adjust the bottom margin for spacing
  width: 40%; // Set the width of the logo to 40% of its container
`;

// Styled component to style the login button
const LoginButton = styled.a`
  color: white; // Text color of the button
  font-weight: 700; // Bold font weight for the button text
  padding: 15px 30px; // Padding around the button text
  background-color: #1db954; // Background color of the button (Spotify green)
  border-radius: 99px; // Rounded border radius to make the button circular
  width: 15%; // Set the width of the button to 15% of its container
`;
