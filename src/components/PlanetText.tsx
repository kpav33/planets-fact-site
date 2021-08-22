import React from "react";
import styled from "styled-components";

import { ReactComponent as IconSource } from "../assets/icon-source.svg";
import DesktopPlanetMenu from "./DesktopPlanetMenu";

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
  width: number;
}

export default function PlanetText({
  data,
  buttonValue,
  setClickButtonValue,
  width,
}: IProps) {
  // Get correct image and text based on the clicked button
  let textParaPath, textSourcePath;
  switch (buttonValue) {
    case "overview":
      textParaPath = data.overview.content;
      textSourcePath = data.overview.source;
      break;
    case "structure":
      textParaPath = data.structure.content;
      textSourcePath = data.structure.source;
      break;
    case "internal structure":
      textParaPath = data.structure.content;
      textSourcePath = data.structure.source;
      break;
    case "surface":
      textParaPath = data.geology.content;
      textSourcePath = data.geology.source;
      break;
    case "surface geology":
      textParaPath = data.geology.content;
      textSourcePath = data.geology.source;
      break;
  }
  return (
    <PlanetTextContainer>
      <div className="tabletSplit">
        <h2>{data.name}</h2>
        <p>{textParaPath}</p>
        <PlanetTextSource>
          <span>Source: </span>
          <a href={textSourcePath}>
            Wikipedia
            <IconSource />
          </a>
        </PlanetTextSource>
      </div>
      {width > 400 && (
        <DesktopPlanetMenu
          style={data.styles}
          buttonValue={buttonValue}
          setClickButtonValue={setClickButtonValue}
        />
      )}
    </PlanetTextContainer>
  );
}

const PlanetTextContainer = styled.div`
  text-align: center;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    grid-row: 2;
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tabletSplit {
      max-width: 350px;
      text-align: left;
    }
  }

  @media only screen and (min-width: 900px) {
    grid-row: 1 / 3;
    grid-column: 4;
    text-align: left;
    padding-top: 46px;
  }

  h2 {
    font-family: var(--font-antonio);
    text-transform: uppercase;
    font-size: 40px;

    @media only screen and (max-width: 768px) and (min-width: 400px) {
      font-size: 48px;
      font-weight: 400;
      margin: 0 0 24px 0;
    }

    @media only screen and (min-width: 900px) {
      font-size: 80px;
      margin: 30px 0px 23px 0px;
    }
  }

  p {
    font-size: 11px;
    line-height: 22px;

    @media only screen and (min-width: 900px) {
      font-size: 14px;
      line-height: 25px;
      height: 150px;
    }
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

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    margin: 0;
    margin-top: 30px;
  }

  @media only screen and (min-width: 900px) {
    font-size: 14px;
    margin: 0;
    width: 164px;
    margin: 35px 0px 39px 0px;
  }

  a {
    color: var(--light-gray);
    font-weight: 700;
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 900px) {
      width: 100px;
    }
  }
`;
