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
            <img src={track.track.album.images[2].url} alt="" />
          </TrackImageContainer>

          <div className="col-md-10 d-block justify-content-start">
            <span className="d-flex">{track.track.name}</span>
            <TrackArtistContainer className="d-flex">
              {track.track.artists.map((artist, index) => (
                <span className="d-flex" key={artist.id}>
                  {artist.name}
                  {index !== track.track.artists.length - 1 ? `,` : ""}&nbsp;
                </span>
              ))}
            </TrackArtistContainer>
          </div>

          <div className="col-md-1 d-flex justify-content-end">
            {msToS(track.track.duration_ms)}
          </div>
        </div>
      </Track>
    );
  });

  return (
    <TrackListContainer className="container-fluid text-center">
      <h1 className="left-align">Recently Played Tracks</h1>
      <RecentTrackList>{newTrack}</RecentTrackList>
    </TrackListContainer>
  );
};

export default RecentlyPlayedTracks;

const TrackListContainer = styled.div`
  .left-align {
    text-align: left;
    margin-left: 35px;
  }
`;

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
