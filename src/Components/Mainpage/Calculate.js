import React, { useContext, useState } from "react";
import { Usercontext } from "../Usercontext";
import { NavLink } from "react-router-dom";

function Calculate() {
  const {
    weight,
    setWeight,
    height,
    setHeight,
    result,
    setResult,
    resultHandler,
    popup,
    setPopUp,
    bmiint,
  } = useContext(Usercontext);

  const heightHandler = (e) => {
    if (isNaN(height)) {
      alert("Please enter just numbers");
      setHeight("");
    } else {
      setHeight(e.target.value);
    }
  };

  const weightHandler = (e) => {
    if (isNaN(weight)) {
      alert("Please enter just numbers");
      setWeight("");
    } else {
      setWeight(e.target.value);
    }
  };

  return (
    <div>
      <div className="calculatemaincontainer">
        <div className="formcontainer">
          <form
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <li>
              <h2
                style={{
                  margin: "0",
                  textAlign: "left",
                  fontWeight: "1000",
                  textAlign: "center",
                }}
              >
                Calculator
              </h2>
            </li>

            <li>
              <input
                type="text"
                name="height"
                onChange={heightHandler}
                value={height}
                placeholder="Your height as cm"
                style={{
                  border: "0",
                  outline: "none",
                  borderRadius: "10px",
                  width: "100%",
                }}
                className="inputs"
              />
            </li>

            <li>
              <input
                type="text"
                name="weight"
                onChange={weightHandler}
                value={weight}
                placeholder="Your weight as kg"
                className="inputs"
                style={{
                  border: "0",
                  borderRadius: "10px",
                  outline: "none",
                  width: "100%",
                }}
              />
            </li>
            <li>
              <button onClick={resultHandler} className="button">
                Calculate
              </button>
            </li>
            <li>Show Result:</li>
            <li>
              <div className="resultcontainer">{result}</div>
            </li>
            <NavLink to="/Recipes" className="route">
              <li
                className="blink"
                style={{
                  fontSize: "10px",
                  display: popup ? "block" : "none",
                  color: "green",

                  marginTop: "10%",
                  textAlign: "center",
                }}
              >
                Get Healthy Recipes!
              </li>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
