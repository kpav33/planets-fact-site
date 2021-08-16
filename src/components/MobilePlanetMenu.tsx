import React from "react";
import styled from "styled-components";

export default function MobilePlanetMenu() {
  return (
    <StyledMobilePlanetMenuDiv>
      <ul>
        <li>Overview</li>
        <li>Structure</li>
        <li>Surface</li>
      </ul>
    </StyledMobilePlanetMenuDiv>
  );
}

const StyledMobilePlanetMenuDiv = styled.div`
  padding-top: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: top;
    padding: 0;
    height: 34px;
    border-bottom: 1px solid hsla(240, 6%, 54%, 0.2);

    li {
      text-transform: uppercase;
      //font-family: var(--font-spartan);
      font-weight: 700;
      color: var(--light-gray);
      // In design files the font size is 9px
      font-size: 11px;
      letter-spacing: 1.93px;

      &:hover {
        cursor: pointer;
        border-bottom: 4px solid var(--purple);
        padding-bottom: 30px;
        color: var(--white);
      }

      &:active {
        color: var(--white);
      }
    }
  }
`;
