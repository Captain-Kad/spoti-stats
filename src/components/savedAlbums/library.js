import React, { useState } from "react";
import { useDataLayerValue } from "../../dataLayer";

import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = () => {
  return (
    <PageContainer>
      <h1>Your Playlists</h1>
      <Playlists>{}</Playlists>
    </PageContainer>
  );
};

export default Library;

const PageContainer = styled.div``;

const Playlists = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
