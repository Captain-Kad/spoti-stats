import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    username: null,
    profilePicture: null,
    external_urls: null,
  });

  const getUserData = async () => {
    const userJSON = await user;
    setUserData({
      username: userJSON.display_name,
      profilePicture: userJSON.images[1].url,
      external_urls: userJSON.external_urls.spotify,
    });
  };

  getUserData();

  return (
    <HeaderContainer>
      <ProfilePicture src={userData.profilePicture} alt="" />
      <Username>
        <a
          href={userData.external_urls}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          {userData.username}
        </a>
      </Username>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div``;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  width: 10%;
`;

const Username = styled.h1`
  font-size: 50px;
  font-weight: 700;
  a:hover {
    color: #3ce478;
  }
`;
