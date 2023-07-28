import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";

import logo from "../../images/spotify-home-logo.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo src={logo} alt="" />
      </div>
      <div>
        <LogoList className="nav nav-pills flex-column nav-justified">
          <li className="nav-item">
            <a href="##" className="nav-link">
              <span className="d-md-block">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <span className="d-md-block">Top Artists</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <span className="d-md-block">Top Tracks</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <span className="d-md-block">Top Albums</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <span className="d-md-block">Library</span>
            </a>
          </li>
        </LogoList>
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
  text-align: center;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 30px;
`;

const LogoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
