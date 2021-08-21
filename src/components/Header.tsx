import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { menuBorderColors } from "../GlobalStyle.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

interface IProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface IStyledProps {
  borderColor: string;
}

export default function Header({
  showMobileMenu,
  setShowMobileMenu,
  setClickButtonValue,
}: IProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setShowMobileMenu(false);
    });
  }, [windowWidth, setShowMobileMenu]);

  function handleClick() {
    setShowMobileMenu(false);
    setClickButtonValue("overview");
  }

  return (
    <>
      <StyledHeader>
        <Link to="/" onClick={handleClick}>
          <h1>The planets</h1>
        </Link>
        {windowWidth >= 400 ? (
          <StyledDesktopNav>
            <StyledDesktopUl>
              <StyledLinkWrapper borderColor={menuBorderColors.borderMercury}>
                <Link to="/mercury" onClick={handleClick}>
                  <li>Mercury</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderVenus}>
                <Link to="/venus" onClick={handleClick}>
                  <li>Venus</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderEarth}>
                <Link to="/earth" onClick={handleClick}>
                  <li>Earth</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderMars}>
                <Link to="/mars" onClick={handleClick}>
                  <li>Mars</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderJupiter}>
                {" "}
                <Link to="/jupiter" onClick={handleClick}>
                  <li>Jupiter</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderSaturn}>
                {" "}
                <Link to="/saturn" onClick={handleClick}>
                  <li>Saturn</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderUranus}>
                {" "}
                <Link to="/uranus" onClick={handleClick}>
                  <li>Uranus</li>
                </Link>
              </StyledLinkWrapper>
              <StyledLinkWrapper borderColor={menuBorderColors.borderNeptune}>
                <Link to="/neptune" onClick={handleClick}>
                  <li>Neptune</li>
                </Link>
              </StyledLinkWrapper>
            </StyledDesktopUl>
          </StyledDesktopNav>
        ) : (
          <GiHamburgerMenu
            size="24px"
            onClick={() => setShowMobileMenu((prevState: any) => !prevState)}
            fill={showMobileMenu ? "#979797" : "var(--text-color)"}
          />
        )}
      </StyledHeader>
      {showMobileMenu && (
        <MobileMenu
          setShowMobileMenu={setShowMobileMenu}
          setClickButtonValue={setClickButtonValue}
        />
      )}
    </>
  );
}

const StyledHeader = styled.header`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  border-bottom: 1px solid hsla(240, 6%, 54%, 0.2);

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    flex-direction: column;
    padding: 32px 52px 0px 52px;
  }

  @media only screen and (min-width: 900px) {
    padding: 0;
  }

  & > a {
    text-decoration: none;
    color: var(--text-color);

    &:active,
    &:visited,
    &:focus {
      color: var(--text-color);
    }
  }

  h1 {
    text-transform: uppercase;
    font-family: var(--font-antonio);
    font-size: 28px;
    margin: 0;
    padding: 0;

    @media only screen and (min-width: 900px) {
      margin: 22px 0px 22px 32px;
    }
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledDesktopNav = styled.nav`
  margin: 0;
  margin-right: 40px;
  padding: 0;
  // width: 100%;
  height: 85px;
`;

const StyledDesktopUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 665px;
  display: flex;
  justify-content: space-between;
  // align-items: flex-end;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 11px;
  color: hsl(0, 0%, 100%, 0.75);
  // padding-top: 10px;
  margin: 0;
  margin-top: 35px;
`;

const StyledLinkWrapper = styled.div<IStyledProps>`
  a {
    text-decoration: none;
    color: hsl(0, 0%, 100%, 0.75);
    height: 34px;
    display: inline-block;

    &:active,
    &:focus {
      color: var(--text-color);
      border-bottom: 4px solid ${(props) => props.borderColor};
      padding-bottom: 45px;
    }
  }

  li {
    cursor: pointer;
    line-height: 25px;
    letter-spacing: 1px;
    height: 34px;
    display: flex;
    align-items: flex-start;

    &:hover {
      color: var(--text-color);
      padding-bottom: 45px;
      border-bottom: 4px solid ${(props) => props.borderColor};
    }
  }
`;

/* @media only screen and (min-width: 1440px) {
  
}*/
