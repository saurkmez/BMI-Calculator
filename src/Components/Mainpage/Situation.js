import React from "react";
import chart from "./bmichart.png";

function Situation() {
  return (
    <div>
      <div className="infomaincontainer">
        <div className="meter">
          <h1 style={{ textAlign: "center" }}> BMI Meter</h1>
          <img src={chart} alt="" style={{ width: "100%" }} />
          <div className="underweight"></div>
          <div className="healthyweight"></div>
          <div className="overweight"></div>
          <div className="obese"></div>
        </div>
      </div>
    </div>
  );
}

export default Situation;
