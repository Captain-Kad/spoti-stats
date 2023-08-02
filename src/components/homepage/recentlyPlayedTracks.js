import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const RecentlyPlayedTracks = () => {
  const [{ recently_played_tracks }] = useDataLayerValue();
  const [userData, setUserData] = useState({
    currentTrack: [],
  });

  const getUserData = async () => {
    const userJSON = await recently_played_tracks;
    setUserData({
      currentTrack: userJSON.items,
    });
  };

  getUserData();
  // console.log(userData.currentTrack);

  const newTrack = userData.currentTrack.map((track) => {
    return (
      <Track>
        <div className="row align-items-center">
          <div className="col-md-1">
            <img src={track.track.album.images[2].url} alt="" />
          </div>
          <div className="col-md-10">{track.track.name}</div>
          <div className="col-md-1">{track.track.duration_ms}</div>
        </div>
      </Track>
    );
  });

  return (
    <TrackListContainer className="container-fluid text-center">
      <RecentTrackList>{newTrack}</RecentTrackList>
    </TrackListContainer>
  );
};

export default RecentlyPlayedTracks;

const TrackListContainer = styled.div``;

const RecentTrackList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Track = styled.li`
  margin-top: 50px;
`;
