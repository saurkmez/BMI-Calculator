import React, { useContext, useState } from "react";
import { Usercontext } from "../Usercontext";
import { NavLink } from "react-router-dom";

function Calculate() {
  const { weight, setWeight, height, setHeight, result, setResult } =
    useContext(Usercontext);

  const [popup, setPopUp] = useState(false);

  const resultHandler = (e) => {
    e.preventDefault();
    const bmiraw = weight / ((height * height) / 10000);
    const bmi = bmiraw.toFixed(2);

    if (isNaN(bmi)) {
      setResult("Please!");
    } else {
      setResult(bmi);
      setPopUp(!popup);
    }
    setWeight("");
    setHeight("");
  };

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
          <form style={{ listStyle: "none" }}>
            <li>
              <h2 style={{ margin: "0", textAlign: "left" }}>Calculator</h2>
            </li>

            <li>
              <input
                type="text"
                name="height"
                onChange={heightHandler}
                value={height}
                placeholder="Your height as cm"
                style={{ border: "1px solid black", width: "100%" }}
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
                style={{ border: "1px solid black", width: "100%" }}
              />
            </li>
            <li>
              <button onClick={resultHandler}>Calculate</button>
            </li>
            <li>
              Show Result:
              <div className="resultcontainer">{result}</div>
            </li>
            <NavLink to="/Recipes" className="route">
              <li
                style={{ fontSize: "10px", display: popup ? "block" : "none" }}
              >
                More info and diet list
              </li>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
