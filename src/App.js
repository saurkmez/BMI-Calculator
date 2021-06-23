import "./App.css";
import React, { useState, useMemo } from "react";
import Calculate from "./Components/Mainpage/Calculate";
import Info from "./Components/Mainpage/Info";
import Header from "./Components/Mainpage/Header";
import Moreinfo from "./Components/MoreInfo/Moreinfo";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Usercontext } from "./Components/Usercontext";
import Documents from "./Components/MoreInfo/Documents";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const providerValue = useMemo(
    () => ({ height, setHeight, weight, setWeight, result, setResult }),
    [height, setHeight, weight, setWeight, result, setResult]
  );

  return (
    <div>
      <HashRouter hashType="slash">
        <Usercontext.Provider value={providerValue}>
          <div className="header">
            <Header />
          </div>
          <Switch>
            <div className="maincontainer">
              <Route path="/" exact component={Calculate} />
              <Route path="/" exact component={Info} />
              <Route path="/MoreInfo" component={Moreinfo} />
              <Route path="/MoreInfo" component={Documents} />
              <Route path="/Recipes" component={Recipes} />
            </div>
          </Switch>
        </Usercontext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
