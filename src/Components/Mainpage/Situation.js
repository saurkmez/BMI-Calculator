import React, { useContext } from "react";
import chart from "./bmichart.png";
import { Usercontext } from "../Usercontext";

function Situation() {
  const { result } = useContext(Usercontext);
  console.log(typeof result);
  console.log(result > 31.0 ? true : false);

  return (
    <div>
      <div className="infomaincontainer">
        <div className="meter">
          <h1 style={{ textAlign: "center" }}> BMI Meter</h1>
          <img src={chart} alt="BMI Chart" style={{ width: "100%" }} />
          <div
            className="underweight"
            style={{ opacity: result < 18.5 ? "0.4" : "0" }}
          ></div>
          <div
            className="healthyweight"
            style={{ opacity: 18.5 < result && result < 24.99 ? "0.4" : "0" }}
          ></div>
          <div
            className="overweight"
            style={{ opacity: 25 < result && result < 29.99 ? "0.4" : "0" }}
          ></div>
          <div
            className="obese"
            style={{ opacity: result > 30 ? "0.4" : "0" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Situation;
