import React from "react";
import styled from "styled-components";

interface IProps {
  img: {
    planet: string;
    internal: string;
    geology: string;
  };
  buttonValue: string | undefined;
  style: {
    maxWidth: string;
    borderColor: string;
  };
}

export default function PlanetImage({ img, buttonValue, style }: IProps) {
  // Set different image and text depending on which button was clicked
  let getImg, altText;
  switch (buttonValue) {
    case "overview":
      getImg = `${img.planet}`;
      altText = "planet";
      break;
    case "structure":
      getImg = `${img.internal}`;
      altText = "internal";
      break;
    case "internal structure":
      getImg = `${img.internal}`;
      altText = "internal";
      break;
    case "surface":
      getImg = `${img.planet}`;
      altText = "geology";
      break;
    case "surface geology":
      getImg = `${img.planet}`;
      altText = "geology";
      break;
  }
  // Store surface img as seperate image and only show it when surface button is clicked
  let surfaceImg = <SurfaceImgDiv src={`${img.geology}`} />;

  return (
    <PlanetImageContainer>
      <img alt={altText} src={getImg} style={{ maxWidth: style.maxWidth }} />
      {buttonValue === "surface" && surfaceImg}
      {buttonValue === "surface geology" && surfaceImg}
    </PlanetImageContainer>
  );
}

const PlanetImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 220px;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    grid-row: 1;
    grid-column: 1 / 3;
    align-self: center;
  }

  @media only screen and (min-width: 900px) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    align-self: center;
    margin-top: 100px;
  }

  p {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    @media only screen and (max-width: 768px) and (min-width: 400px) {
      padding: 0 50px;
    }
  }
`;

const SurfaceImgDiv = styled.img`
  height: 133px;
  width: 170px;
  position: absolute;
  object-fit: contain;
  top: 50%;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    top: 64%;
    height: 163px;
    width: 200px;
  }

  @media only screen and (min-width: 900px) {
    top: 100%;
    height: 163px;
    width: 200px;
  }
`;
