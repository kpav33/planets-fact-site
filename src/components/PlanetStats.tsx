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

  @media only screen and (min-width: 900px) {
    // to do
    grid-gap: 30px;
    grid-row: 3;
    grid-column: 1 / 4;
    // align-self: center;
    grid-template: 128px / repeat(4, 1fr);
    align-self: center;
    padding: 0px 165px;
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

  @media only screen and (min-width: 900px) {
    // to do
    //justify-content: center;
    //align-items: flex-start;
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

    @media only screen and (min-width: 900px) {
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -1.5px;
    }
  }
`;
