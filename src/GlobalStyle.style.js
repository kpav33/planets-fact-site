import { createGlobalStyle } from "styled-components";
import backgroundStars from "./assets/background-stars.svg";

export const GlobalStyles = createGlobalStyle`
    :root {
        --text-color: hsl(0, 0%, 100%);
        --background: hsl(240, 67%, 8%);
        --gray: hsl(240, 17%, 26%);
        --light-gray: hsl(240, 6%, 54%);
        --blue: hsl(194, 48%, 49%);
        --yellow: hsl(33, 82%, 61%);
        --purple: hsl(263, 67%, 51%);
        --dark-red: hsl(10, 63%, 51%);
        --red: hsl(2, 68%, 53%);
        --orange: hsl(17, 73%, 46%);
        --light-green: hsl(169, 73%, 44%);
        --bright-blue: hsl(222, 87%, 56%);
        --font-spartan: "Spartan", sans-serif;
        --font-antonio: "Antonio", sans-serif;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html {
        max-width: 1920px;
        margin: 0 auto;
    }
    body {
        margin: 0;
        padding: 0;
        color: var(--text-color);
        background: url(${backgroundStars});
        background-color: var(--background);
        font-size: 14px;
        font-family: "Spartan", sans-serif;
    }
`;

export const menuBorderColors = {
  borderMercury: "var(--blue)",
  borderVenus: "var(--yellow)",
  borderEarth: "var(--purple)",
  borderMars: "var(--dark-red)",
  borderJupiter: "var(--red)",
  borderSaturn: "var(--orange)",
  borderUranus: "var(--light-green)",
  borderNeptune: "var(--bright-blue)",
};
