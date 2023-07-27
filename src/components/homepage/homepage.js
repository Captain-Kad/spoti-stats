import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Sidebar from "./sidebar";

const HomePage = ({ spotify }) => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <SidebarContainer className="col-md-1">
          <Sidebar />
        </SidebarContainer>

        <BodyContainer className="col-md-11">
          <Title>Welcome To Spotify Stats</Title>
          <Header />
          {/* Body */}
        </BodyContainer>
      </div>
    </div>
  );
};

export default HomePage;

const SidebarContainer = styled.div`
  background-color: black;
`;

const BodyContainer = styled.div`
  background-color: #131516;
`;

const Title = styled.h1`
  /*  */
`;
