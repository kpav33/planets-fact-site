import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import data from "./data.json";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MobilePlanetMenu from "./components/MobilePlanetMenu";
import PlanetInfo from "./components/PlanetInfo";

// const obj = JSON.parse(data);
//console.log(data[0].planet);

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      {!showMobileMenu && (
        <>
          <Switch>
            <Route exact path="/">
              <MobilePlanetMenu />
              <PlanetInfo data={data[0]} />
            </Route>
            <Route exact path="/mercury">
              <MobilePlanetMenu />
              <PlanetInfo data={data[0]} />
            </Route>
            <Route exact path="/venus">
              <MobilePlanetMenu />
              <PlanetInfo data={data[1]} />
            </Route>
            <Route exact path="/earth">
              <MobilePlanetMenu />
              <PlanetInfo data={data[2]} />
            </Route>
            <Route exact path="/mars">
              <MobilePlanetMenu />
              <PlanetInfo data={data[3]} />
            </Route>
            <Route exact path="/jupiter">
              <MobilePlanetMenu />
              <PlanetInfo data={data[4]} />
            </Route>
            <Route exact path="/saturn">
              <MobilePlanetMenu />
              <PlanetInfo data={data[5]} />
            </Route>
            <Route exact path="/uranus">
              <MobilePlanetMenu />
              <PlanetInfo data={data[6]} />
            </Route>
            <Route exact path="/neptune">
              <MobilePlanetMenu />
              <PlanetInfo data={data[7]} />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
