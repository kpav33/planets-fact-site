import React from "react";
import styled from "styled-components";

interface IProps {
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  style: {
    maxWidth: string;
    borderColor: string;
  };
}

interface StyledProps {
  borderColor: string;
}

export default function MobilePlanetMenu({
  setClickButtonValue,
  style,
}: IProps) {
  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    let target = e.target as HTMLLIElement;
    // Add check to make sure object exists
    // console.log(target.textContent?.toLowerCase());
    setClickButtonValue(target.textContent?.toLowerCase());
  }

  // console.log(style);

  return (
    <StyledMobilePlanetMenuDiv borderColor={style.borderColor}>
      <ul>
        <li onClick={handleClick}>Overview</li>
        <li onClick={handleClick}>Structure</li>
        <li onClick={handleClick}>Surface</li>
      </ul>
    </StyledMobilePlanetMenuDiv>
  );
}

const StyledMobilePlanetMenuDiv = styled.div<StyledProps>`
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
      cursor: pointer;

      &:hover {
        cursor: pointer;
        border-bottom: 4px solid ${(props) => props.borderColor};
        padding-bottom: 30px;
        color: var(--white);
      }

      &:active {
        color: var(--white);
      }
    }
  }
`;
