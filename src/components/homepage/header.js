import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [{ user }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    username: null,
    profilePicture: null,
  });
  // console.log(user);

  const getUserData = async () => {
    const userJSON = await user;
    // console.log(userJSON);
    setUserData({
      username: userJSON.display_name,
      profilePicture: userJSON.images[1].url,
    });
  };

  getUserData();

  return (
    <HeaderContainer>
      {/* {console.log(userData.profilePicture)} */}
      <ProfilePicture src={userData.profilePicture} alt="" />
      <Username>{userData.username}</Username>
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
`;
