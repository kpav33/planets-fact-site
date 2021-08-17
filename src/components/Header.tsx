import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import MobileMenu from "./MobileMenu";

interface IProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<any>>;
}

export default function Header({ showMobileMenu, setShowMobileMenu }: IProps) {
  // const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);
  // console.log(showMobileMenu);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setShowMobileMenu(false);
    });
  }, [windowWidth]);

  return (
    <>
      <StyledHeader>
        <h1>The planets</h1>
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
      {showMobileMenu && <MobileMenu />}
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
