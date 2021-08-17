import React from "react";
import styled from "styled-components";

import PlanetImage from "./PlanetImage";
import PlanetText from "./PlanetText";
import PlanetStats from "./PlanetStats";

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

export default function PlanetInfo({ data }: IProps) {
  // console.log(data[2].images.planet);
  return (
    <PlanetInfoContainer>
      <PlanetImage img={data.images} />
      <PlanetText data={data} />
      <PlanetStats data={data} />
    </PlanetInfoContainer>
  );
}

const PlanetInfoContainer = styled.div`
  padding: 24px;
`;
