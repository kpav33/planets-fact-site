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
    styles: {
      maxWidth: string;
      borderColor: string;
    };
  };
  buttonValue: string | undefined;
}

export default function PlanetInfo({ data, buttonValue }: IProps) {
  // console.log(data[2].images.planet);
  // console.log(buttonValue);
  console.log(data.styles);
  return (
    <PlanetInfoContainer>
      <PlanetImage
        img={data.images}
        buttonValue={buttonValue}
        style={data.styles}
      />
      <PlanetText data={data} buttonValue={buttonValue} />
      <PlanetStats data={data} />
    </PlanetInfoContainer>
  );
}

const PlanetInfoContainer = styled.div`
  padding: 24px;
`;
