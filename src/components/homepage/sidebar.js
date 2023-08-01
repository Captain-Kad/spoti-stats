import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";

import logo from "../../images/spotify-home-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import AlbumIcon from "@mui/icons-material/Album";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo src={logo} alt="" />
      </div>
      <div>
        <LogoList className="nav nav-pills flex-column nav-justified">
          <li className="nav-item">
            <a href="##" className="nav-link active">
              <HomeIcon />
              <span className="d-md-block">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <PersonIcon />
              <span className="d-md-block">Top Artists</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <AudiotrackIcon />
              <span className="d-md-block">Top Tracks</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <AlbumIcon />
              <span className="d-md-block">Top Albums</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="##" className="nav-link">
              <LibraryMusicIcon />
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
  margin-bottom: 100px;
`;

const LogoList = styled.ul`
  list-style-type: none;
  padding: 0;
  .nav-item:hover {
    background-color: #131516;
  }
`;
