import React from "react";
import styled from "styled-components";

interface IProps {
  buttonValue: string | undefined;
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  style: {
    maxWidth: string;
    borderColor: string;
  };
}

interface IStyledProps {
  backgroundColor: string;
}

export default function DesktopPlanetMenu({
  buttonValue,
  setClickButtonValue,
  style,
}: IProps) {
  // Repeated from MobilePlanetMenu, find a way to DRY
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let target = e.target as HTMLLIElement;
    // Add check to make sure object exists
    // console.log(target.textContent?.toLowerCase());
    setClickButtonValue(target.textContent?.toLowerCase().slice(3));
  }

  function defaultStyles(selection: string) {
    return buttonValue === selection
      ? { background: style.borderColor }
      : undefined;
  }

  return (
    <StyledDesktopPlanetMenuDiv backgroundColor={style.borderColor}>
      <div>
        <button onClick={handleClick} style={defaultStyles("overview")}>
          <span>01</span> Overview
        </button>
        <button onClick={handleClick} style={defaultStyles("structure")}>
          <span>02</span> Structure
        </button>
        <button onClick={handleClick} style={defaultStyles("surface")}>
          <span>03</span> Surface
        </button>
      </div>
    </StyledDesktopPlanetMenuDiv>
  );
}

const StyledDesktopPlanetMenuDiv = styled.div<IStyledProps>`
  div {
    list-style: none;
    padding: 0;
    height: 176px;
    display: grid;
    grid-template: auto / auto;
    grid-gap: 16px;
    font-size: 12px;
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 2.6px;
    font-weight: 700;

    @media only screen and (max-width: 768px) and (min-width: 400px) {
      height: 150px;
      font-size: 9px;
      letter-spacing: 1.9px;
      width: 250px;
      margin-top: 20px;
    }
  }

  button {
    border: 1px solid hsla(240, 6%, 54%, 0.2);
    //padding: 18px 0px 0px 28px;
    // align-self: center;
    cursor: pointer;
    background: none;
    font-family: var(--font-spartan);
    color: var(--text-color);
    font-weight: 700;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    text-align: left;
    padding: 6px 0px 0px 25px;

    @media only screen and (max-width: 768px) and (min-width: 400px) {
      font-size: 9px;
      letter-spacing: 1.9px;
      padding: 3px 0px 0px 25px;
    }

    &:hover,
    &:active,
    &:focus {
      background: ${(props) => props.backgroundColor};
    }
  }

  span {
    margin-right: 25px;
    color: hsl(0, 0%, 100%, 0.75);
  }
`;
