import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = () => {
  const [{ saved_playlists }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    currentPlaylist: [],
  });

  const getUserData = async () => {
    const userJSON = await saved_playlists;
    setUserData({
      currentPlaylist: userJSON.items,
    });
  };

  getUserData();
  console.log(userData);

  const newPlaylist = userData.currentPlaylist.map((playlist) => {
    return (
      <Playlist className="col-md-3">
        <div>
          <PlaylistImage src={playlist.images[0].url} alt="" />
          <span className="d-md-block">{playlist.name} </span>
          <span className="d-md-block" style={{color: "rgb(169, 161, 150)"}}>{playlist.tracks.total} TRACKS</span>
        </div>
      </Playlist>
    );
  });

  return (
    <PageContainer>
      <h1>Your Playlists</h1>
      <BodyContainer className="row">{newPlaylist}</BodyContainer>
    </PageContainer>
  );
};

export default Library;

const PageContainer = styled.div``;

const BodyContainer = styled.div`
  margin-top: 80px;
`;

const Playlist = styled.div`
  margin-bottom: 40px;
  padding: 0;
`;

const PlaylistImage = styled.img`
  width: 90%;
`;
