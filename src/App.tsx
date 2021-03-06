import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import data from "./data.json";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MobilePlanetMenu from "./components/MobilePlanetMenu";
import PlanetInfo from "./components/PlanetInfo";

interface IState {
  clickButtonValue: string | undefined;
}

function App() {
  // Show or hide mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Allow user to switch between different planet information
  const [clickButtonValue, setClickButtonValue] =
    useState<IState["clickButtonValue"]>("overview");

  // Store users device width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

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
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[0].styles}
                />
              )}
              <PlanetInfo
                data={data[0]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/mercury">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[0].styles}
                />
              )}
              <PlanetInfo
                data={data[0]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/venus">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[1].styles}
                />
              )}
              <PlanetInfo
                data={data[1]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/earth">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[2].styles}
                />
              )}
              <PlanetInfo
                data={data[2]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/mars">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[3].styles}
                />
              )}
              <PlanetInfo
                data={data[3]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/jupiter">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[4].styles}
                />
              )}
              <PlanetInfo
                data={data[4]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/saturn">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[5].styles}
                />
              )}
              <PlanetInfo
                data={data[5]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/uranus">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[6].styles}
                />
              )}
              <PlanetInfo
                data={data[6]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
            <Route exact path="/neptune">
              {width < 400 && (
                <MobilePlanetMenu
                  setClickButtonValue={setClickButtonValue}
                  style={data[7].styles}
                />
              )}
              <PlanetInfo
                data={data[7]}
                buttonValue={clickButtonValue}
                setClickButtonValue={setClickButtonValue}
                width={width}
              />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
