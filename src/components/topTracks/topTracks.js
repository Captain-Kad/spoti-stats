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
//   console.log(userData);

  const msToS = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const newTrack = userData.currentTrack.map((track) => {
    return (
      <Track key={track.played_at}>
        <div className="row align-items-center">
          <TrackImageContainer className="col-md-1">
            <img src={track.album.images[2].url} alt="" />
          </TrackImageContainer>

          <div className="col-md-10 d-block justify-content-start">
            <span className="d-flex">{track.name}</span>
            <TrackArtistContainer className="d-flex">
              {track.artists.map((artist, index) => (
                <span className="d-flex" key={artist.id}>
                  {artist.name}
                  {index !== track.artists.length - 1 ? `,` : ""}&nbsp;
                </span>
              ))}
            </TrackArtistContainer>
          </div>

          <div className="col-md-1 d-flex justify-content-end">
            {msToS(track.duration_ms)}
          </div>
        </div>
      </Track>
    );
  });

  return (
    <PageContainer>
      <h1>Top Tracks</h1>
      <RecentTrackList>{newTrack}</RecentTrackList>
    </PageContainer>
  );
};

export default TopTracks;

const PageContainer = styled.div``;

const RecentTrackList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Track = styled.li`
  margin-top: 20px;
  .row {
    margin: 0;
    padding: 0;
  }

  .col-md-10 {
    margin: 0;
    padding: 0;
  }
`;

const TrackImageContainer = styled.div`
  .col-md-1 {
    margin: 0;
    padding: 0;
  }
`;

const TrackArtistContainer = styled.div`
  font-size: 14px;
  color: rgb(169, 161, 150);
`;
