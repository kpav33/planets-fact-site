import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>The planets</h1>
      <div>Mobile Nav menu</div>
    </StyledHeader>
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
`;
