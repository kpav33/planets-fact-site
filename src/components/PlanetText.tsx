import React from "react";
import styled from "styled-components";

import { ReactComponent as IconSource } from "../assets/icon-source.svg";

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
  buttonValue: string | undefined;
}

export default function PlanetText({ data, buttonValue }: IProps) {
  // console.log(buttonValue);
  let textParaPath;
  let textSourcePath;
  switch (buttonValue) {
    case "overview":
      textParaPath = data.overview.content;
      textSourcePath = data.overview.source;
      break;
    case "structure":
      textParaPath = data.structure.content;
      textSourcePath = data.structure.source;
      break;
    case "surface":
      textParaPath = data.geology.content;
      textSourcePath = data.geology.source;
      break;
  }
  return (
    <PlanetTextContainer>
      <h2>{data.name}</h2>
      <p>{textParaPath}</p>
      <PlanetTextSource>
        <span>Source: </span>
        <a href={textSourcePath}>
          Wikipedia
          <IconSource />
        </a>
      </PlanetTextSource>
    </PlanetTextContainer>
  );
}

const PlanetTextContainer = styled.div`
  text-align: center;

  @media only screen and (min-width: 900px) {
    // to do
    grid-row: 1 / 3;
    grid-column: 3;
    align-self: center;
  }

  h2 {
    font-family: var(--font-antonio);
    text-transform: uppercase;
    font-size: 40px;
  }

  p {
    font-size: 11px;
    line-height: 22px;
  }
`;

const PlanetTextSource = styled.div`
  margin: 0 auto;
  color: var(--light-gray);
  width: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  line-height: 25px;

  a {
    color: var(--light-gray);
    font-weight: 700;
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
