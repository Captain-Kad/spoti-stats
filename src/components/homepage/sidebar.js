import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";

import logo from "../../images/spotify-home-logo.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo src={logo} alt="" />
        <span className="d-md-block">Home</span>
        <span className="d-md-block">Top Artists</span>
        <span className="d-md-block">Top Tracks</span>
        <span className="d-md-block">Top Albums</span>
        <span className="d-md-block">Library</span>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
`;
