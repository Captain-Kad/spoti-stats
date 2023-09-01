import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const TopTracks = () => {
  const [{ top_tracks }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    currentTrack: [],
  });

  const getUserData = async () => {
    const userJSON = await top_tracks;
    setUserData({
      currentTrack: userJSON.items,
    });
  };

  getUserData();
  console.log(userData);

  return (
    <PageContainer>
      <h1>Top Tracks</h1>
      <BodyContainer className="row">{}</BodyContainer>
    </PageContainer>
  );
};

export default TopTracks;

const PageContainer = styled.div``;

const BodyContainer = styled.div`
  margin-top: 80px;
`;
