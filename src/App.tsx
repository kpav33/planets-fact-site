import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import data from "./data.json";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MobilePlanetMenu from "./components/MobilePlanetMenu";
import PlanetInfo from "./components/PlanetInfo";

// const obj = JSON.parse(data);
//console.log(data[0].planet);
// Add try/catch to make sure data exists

interface IState {
  clickButtonValue: string | undefined;
}

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [clickButtonValue, setClickButtonValue] =
    useState<IState["clickButtonValue"]>("overview");

  return (
    <div className="App">
      <GlobalStyles />
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        setClickButtonValue={setClickButtonValue}
      />
      {!showMobileMenu && (
        <>
          <Switch>
            <Route exact path="/">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[0]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/mercury">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[0]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/venus">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[1]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/earth">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[2]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/mars">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[3]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/jupiter">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[4]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/saturn">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[5]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/uranus">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[6]} buttonValue={clickButtonValue} />
            </Route>
            <Route exact path="/neptune">
              <MobilePlanetMenu setClickButtonValue={setClickButtonValue} />
              <PlanetInfo data={data[7]} buttonValue={clickButtonValue} />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
