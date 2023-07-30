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
    setUserData({
      username: userJSON.display_name,
      profilePicture: userJSON.images[1].url,
    });
  };

  getUserData();

  return (
    <div>
      {/* {console.log(userData.profilePicture)} */}
      <ProfilePicture src={userData.profilePicture} alt="" />
      <h1>{userData.username}</h1>
    </div>
  );
};

export default Header;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  width: 10%;
`;
