import React from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import data from "./data.json";

import Header from "./components/Header";
import MobilePlanetMenu from "./components/MobilePlanetMenu";
import PlanetInfo from "./components/PlanetInfo";

// const obj = JSON.parse(data);
//console.log(data[0].planet);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <MobilePlanetMenu />
      <PlanetInfo data={data} />
    </div>
  );
}

export default App;
