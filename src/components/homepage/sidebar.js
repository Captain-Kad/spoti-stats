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
          <CustomLink href="/">
            <HomeIcon />
            <span className="d-md-block">Home</span>
          </CustomLink>

          <CustomLink href="/topArtists">
            <PersonIcon />
            <span className="d-md-block">Top Artists</span>
          </CustomLink>

          <CustomLink href="/topTracks">
            <AudiotrackIcon />
            <span className="d-md-block">Top Tracks</span>
          </CustomLink>

          <CustomLink href="/topAlbums">
            <AlbumIcon />
            <span className="d-md-block">Top Albums</span>
          </CustomLink>

          <CustomLink href="/library">
            <LibraryMusicIcon />
            <span className="d-md-block">Library</span>
          </CustomLink>
        </LogoList>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const CustomLink = ({ href, children }) => {
  const path = window.location.pathname;

  return (
    <li className="nav-item">
      <a href={href} className={path === href ? "nav-link active" : "nav-link"}>
        {children}
      </a>
    </li>
  );
};

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
  .nav-link {
    color: rgb(22, 159, 71);
  }
  .nav-link.active {
    background-color: rgb(22, 159, 71);
  }
`;
