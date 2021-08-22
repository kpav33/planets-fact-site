import React from "react";
import styled from "styled-components";
import { ReactComponent as MobileArrow } from "../assets/icon-chevron.svg";
import { Link } from "react-router-dom";
interface StyledProps {
  dotColor: string;
}

interface IProps {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<any>>;
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function MobileMenu({
  setShowMobileMenu,
  setClickButtonValue,
}: IProps) {
  // Set values back to default when user is switching between planets
  function handleClick() {
    setShowMobileMenu(false);
    setClickButtonValue("overview");
  }

  return (
    <StyledMobileNav>
      <StyledUl>
        <Link to="/mercury" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#DEF4FC" />
            Mercury
            <MobileArrow />
          </li>
        </Link>
        <Link to="/venus" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#F7CC7F" />
            Venus
            <MobileArrow />
          </li>
        </Link>
        <Link to="/earth" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#545BFE" />
            Earth
            <MobileArrow />
          </li>
        </Link>
        <Link to="/mars" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#FF6A45" />
            Mars
            <MobileArrow />
          </li>
        </Link>
        <Link to="/jupiter" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#ECAD7A" />
            Jupiter
            <MobileArrow />
          </li>
        </Link>
        <Link to="/saturn" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#FCCB6B" />
            Saturn
            <MobileArrow />
          </li>
        </Link>
        <Link to="/uranus" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#65F0D5" />
            Uranus
            <MobileArrow />
          </li>
        </Link>
        <Link to="/neptune" onClick={handleClick}>
          <li>
            <StyledDot dotColor="#497EFA" />
            Neptune
            <MobileArrow />
          </li>
        </Link>
      </StyledUl>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.nav`
  position: absolute;
  background: var(--background);
  padding: 24px 32px 0 24px;
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;

  a {
    text-decoration: none;
  }

  li {
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-weight: 700;
    position: relative;
    padding-left: 45px;
    padding-bottom: 20px;
    margin-top: 20px;
    border-bottom: 1px solid hsla(240, 6%, 54%, 0.1);
    color: var(--text-color);

    &:active {
      color: var(--text-color);
    }

    &:active {
      color: var(--text-color);
    }

    &:visited {
      color: var(--text-color);
    }

    &:focus {
      color: var(--text-color);
    }

    svg {
      position: absolute;
      left: 96%;
    }
  }
`;

const StyledDot = styled.span<StyledProps>`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.dotColor};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  right: 93%;
  top: -3px;
`;
