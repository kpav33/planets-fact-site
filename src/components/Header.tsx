import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

interface IProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setClickButtonValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Header({
  showMobileMenu,
  setShowMobileMenu,
  setClickButtonValue,
}: IProps) {
  // const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);
  // console.log(showMobileMenu);

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
        {windowWidth >= 768 ? (
          <div>Desktop Menu</div>
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

  a {
    text-decoration: none;
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
  }

  h1 {
    text-transform: uppercase;
    font-family: var(--font-antonio);
    font-size: 28px;
    margin: 0;
    padding: 0;
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
