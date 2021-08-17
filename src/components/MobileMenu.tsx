import React from "react";
import styled from "styled-components";
import { ReactComponent as MobileArrow } from "../assets/icon-chevron.svg";

interface StyledProps {
  dotColor: string;
}

export default function MobileMenu() {
  return (
    <StyledMobileNav>
      <StyledUl>
        <li>
          <StyledDot dotColor="#DEF4FC" />
          Mercury
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#F7CC7F" />
          Venus
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#545BFE" />
          Earth
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#FF6A45" />
          Mars
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#ECAD7A" />
          Jupiter
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#FCCB6B" />
          Saturn
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#65F0D5" />
          Uranus
          <MobileArrow />
        </li>
        <li>
          <StyledDot dotColor="#497EFA" />
          Neptune
          <MobileArrow />
        </li>
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

    svg {
      position: absolute;
      left: 295px;
    }
  }
`;

const StyledDot = styled.span<StyledProps>`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.dotColor};
  border-radius: 50%;
  display: inline-block;
  //margin-right: 25px;
  position: absolute;
  right: 285px;
  top: -3px;
`;
