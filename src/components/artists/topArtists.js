import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const TopArtists = () => {
  const [{ top_artists }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    artists: [],
  });

  const getUserData = async () => {
    const userJSON = await top_artists;
    setUserData({
      artists: userJSON.items,
    });
  };

  getUserData();
  console.log(userData);

  const newArtist = userData.artists.map((artist) => {
    return (
      <Artist className="col-md-2">
        <div className="fill-up">
          <img src={artist.images[2].url} alt="" className="rounded-circle" />
          <span className="d-md-block">{artist.name}</span>
        </div>
      </Artist>
    );
  });

  return (
    <PageContainer>
      <h1>Top Artists</h1>
      <BodyContainer className="row">{newArtist}</BodyContainer>
    </PageContainer>
  );
};

export default TopArtists;

const PageContainer = styled.div``;

const BodyContainer = styled.div`
  margin-top: 80px;
`;

const Artist = styled.div`
  margin-bottom: 50px;
  padding: 0;

  .fill-up {
    flex-direction: column;
  }
`;
