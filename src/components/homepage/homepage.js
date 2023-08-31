import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Logout from "./logout";
import RecentlyPlayedTracks from "./recentlyPlayedTracks";

const HomePage = () => {
  return (
    <HomePageContainer className="container-fluid text-center">
      <Title>Welcome To Spotify Stats</Title>
      <Header />
      <Logout />
      <RecentlyPlayedTracks />
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  .container-fluid {
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
