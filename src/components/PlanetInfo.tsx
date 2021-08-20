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
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function PlanetInfo({
  data,
  buttonValue,
  setClickButtonValue,
}: IProps) {
  // console.log(data[2].images.planet);
  // console.log(buttonValue);
  // console.log(data.styles);
  return (
    <PlanetInfoContainer>
      <PlanetImage
        img={data.images}
        buttonValue={buttonValue}
        style={data.styles}
      />
      <PlanetText
        data={data}
        buttonValue={buttonValue}
        setClickButtonValue={setClickButtonValue}
      />
      <PlanetStats data={data} />
    </PlanetInfoContainer>
  );
}

const PlanetInfoContainer = styled.div`
  padding: 24px;

  @media only screen and (min-width: 900px) {
    // to do
    height: 938px;
    display: grid;
    grid-template: repeat(3, 300px) / repeat(2, 1fr) 50px 350px;
    padding: 24px 165px;
  }
`;
