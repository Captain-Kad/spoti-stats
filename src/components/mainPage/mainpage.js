import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "../homepage/homepage";
import Sidebar from "../homepage/sidebar";
import TopArtists from "../artists/topArtists";

const MainPage = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/topArtists":
      component = <TopArtists />;
      break;
    case "/topTracks":
      component = "";
      break;
    case "/topAlbums":
      component = "";
      break;
    case "/library":
      component = "";
      break;

    default:
      break;
  }

  return (
    <PageContainer className="container-fluid text-center">
      <div className="row">
        <SidebarContainer className="col-md-2">
          <Sidebar />
        </SidebarContainer>

        <BodyContainer className="col-md-10">{component}</BodyContainer>
      </div>
    </PageContainer>
  );
};

export default MainPage;

const PageContainer = styled.div`
  .container-fluid {
    margin: 0;
    padding: 0;
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 6.9%;
  font-size: 14px;
`;

const BodyContainer = styled.div`
  background-color: #131516;
  height: 100vh;
  width: 93.1%;
  overflow-y: overlay;
`;
