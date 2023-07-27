import React from "react";
import styled from "@emotion/styled";

const HomePage = ({ spotify }) => {
  return (
    <div>
      <div>
        {/* Sidebar */}
        <div>
          <Title>Spotify Stats</Title>
          {/* Body */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
`;
