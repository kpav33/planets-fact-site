import React from "react";
import styled from "styled-components";

interface IProps {
  data: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  };
}

export default function PlanetStats({ data }: IProps) {
  return (
    <PlanetStatsContainer>
      <PlanetStatDiv>
        <p>Rotation time</p>
        <span>{data.rotation}</span>
      </PlanetStatDiv>
      <PlanetStatDiv>
        <p>Revolution time</p>
        <span>{data.revolution}</span>
      </PlanetStatDiv>
      <PlanetStatDiv>
        <p>Radius</p>
        <span>{data.radius}</span>
      </PlanetStatDiv>
      <PlanetStatDiv>
        <p>Average temp.</p>
        <span>{data.temperature}</span>
      </PlanetStatDiv>
    </PlanetStatsContainer>
  );
}

const PlanetStatsContainer = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template: auto / auto;
  grid-gap: 8px;
`;

const PlanetStatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: var(--light-gray);
  font-weight: 700;
  font-size: 8px;
  padding: 9px 24px 13px 24px;
  border: 1px solid hsla(240, 6%, 54%, 0.2);

  span {
    color: var(--text-color);
    font-family: var(--font-antonio);
    font-weight: 400;
    font-size: 20px;
  }
`;
