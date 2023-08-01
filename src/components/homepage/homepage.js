import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Sidebar from "./sidebar";
import Logout from "./logout";

const HomePage = ({ spotify }) => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <SidebarContainer className="col-md-2">
          <Sidebar />
        </SidebarContainer>

        <BodyContainer className="col-md-10">
          <Title>Welcome To Spotify Stats</Title>
          <Header />
          <Logout />
          {/* Body */}
        </BodyContainer>
      </div>
    </div>
  );
};

export default HomePage;

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
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
