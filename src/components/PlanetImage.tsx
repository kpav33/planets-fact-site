import React from "react";
import styled from "styled-components";
// import image from "../assets/planet-earth.svg";

interface IProps {
  img: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export default function PlanetImage({ img }: IProps) {
  //console.log(`.${img.planet}`);
  //console.log(image);
  // console.log(img);
  // You need assests folder with images in public folder
  let getImg = `${img.planet}`;
  // console.log(getImg);

  // ./assets/planet-mercury.svg
  return (
    <PlanetImageContainer>
      <img alt="test" src={getImg} />
    </PlanetImageContainer>
  );
}

const PlanetImageContainer = styled.div`
  padding: 67px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    // Need to dinamically change this to make sure the planet images are of different sizes
    max-width: 70%;
  }
`;
