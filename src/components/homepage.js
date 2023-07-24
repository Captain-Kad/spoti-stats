import React from "react";
import styled from "@emotion/styled";

import Engine from "./engine";

const HomePage = () => {
  return (
    <Container>
      <Title>Spotify Stats</Title>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
`;
