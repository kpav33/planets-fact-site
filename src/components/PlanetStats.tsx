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

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    grid-row: 3;
    grid-column: 1 / 3;
    grid-template: 88px / repeat(4, 1fr);
    grid-gap: 11px;
  }

  @media only screen and (min-width: 900px) {
    grid-gap: 30px;
    grid-row: 3;
    grid-column: 1 / 5;
    grid-template: 128px / repeat(4, 1fr);
    align-self: center;
  }
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

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    letter-spacing: 0.7px;
    padding: 10px 15px 19px 15px;
  }

  @media only screen and (min-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 25px;
  }

  span {
    color: var(--text-color);
    font-family: var(--font-antonio);
    font-weight: 400;
    font-size: 20px;

    @media only screen and (max-width: 768px) and (min-width: 400px) {
      font-size: 24px;
      letter-spacing: -0.9px;
    }

    @media only screen and (min-width: 900px) {
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -1.5px;
    }
  }
`;
