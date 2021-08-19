import React from "react";
import styled from "styled-components";
// import image from "../assets/planet-earth.svg";

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
  //console.log(`.${img.planet}`);
  //console.log(image);
  // console.log(img);
  // You need assests folder with images in public folder
  // buttonValue = "geology";
  // console.log(img);
  console.log(style);
  let getImg;
  let altText;
  switch (buttonValue) {
    case "overview":
      getImg = `${img.planet}`;
      altText = "planet";
      break;
    case "structure":
      getImg = `${img.internal}`;
      altText = "internal";
      break;
    case "surface":
      getImg = `${img.planet}`;
      altText = "geology";
      break;
  }
  let beforeImg = <SurfaceImgDiv src={`${img.geology}`} />;
  // let getImg = `${img.planet}`;SurfaceImgDiv
  // console.log(getImg);

  // ./assets/planet-mercury.svg
  return (
    <PlanetImageContainer>
      <img alt={altText} src={getImg} style={{ maxWidth: style.maxWidth }} />
      {buttonValue === "surface" && beforeImg}
    </PlanetImageContainer>
  );
}

const PlanetImageContainer = styled.div`
  // padding: 67px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 220px;

  p {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    // Need to dinamically change this to make sure the planet images are of different sizes
    // Instead of using styled-components theme switcher your could just create an additional "style" object in data.json for each planet and add the necessary styles there (max-width and color for each planet)
    // max-width: 70%;
  }
`;

const SurfaceImgDiv = styled.img`
  // color: red;
  // background: url("./assets/geology-mercury.png");
  height: 163px;
  width: 200px;
  position: absolute;
  object-fit: contain;
  // Adjust this for desktop and tablet
  top: 50%;
`;
