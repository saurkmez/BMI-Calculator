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
import Situation from "./Components/Mainpage/Situation";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState();
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState("");
  const [popup, setPopUp] = useState(false);
  const [infopopup, setInfopopup] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const resultHandler = (e) => {
    e.preventDefault();
    const bmiraw = weight / ((height * height) / 10000);
    const bmistring = bmiraw.toFixed(2);
    const bmi = parseFloat(bmistring);

    console.log(typeof bmi);
    if (isNaN(bmi)) {
      setResult("Please!");
    } else {
      setResult(bmi);
      setPopUp(!popup);
      setInfopopup(true);
    }
    setWeight("");
    setHeight("");
  };

  const providerValue = useMemo(
    () => ({
      height,
      setHeight,
      weight,
      setWeight,
      result,
      setResult,
      query,
      setQuery,
      submitHandler,
      search,
      setSearch,
      resultHandler,
      popup,
      setPopUp,
    }),
    [
      height,
      setHeight,
      weight,
      setWeight,
      result,
      setResult,
      query,
      setQuery,
      submitHandler,
      search,
      setSearch,
      resultHandler,
      popup,
      setPopUp,
    ]
  );

  return (
    <div className="app">
      <HashRouter hashType="slash">
        <Usercontext.Provider value={providerValue}>
          <div className="header">
            <Header />
          </div>
          <Switch>
            <div className="maincontainer">
              <Route path="/" exact component={Calculate} />
              <Route path="/" exact component={infopopup ? Situation : Info} />
              <Route path="/Recipes" component={Recipes} />
              <Route path="/MoreInfo" component={Moreinfo} />
              <Route path="/MoreInfo" component={Documents} />
            </div>
          </Switch>
        </Usercontext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
