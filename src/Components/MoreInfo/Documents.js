import React from "react";
import chart from "./BMI_chart.png";

function Documents() {
  return (
    <div className="documentscontainer">
      {" "}
      <h1 style={{ textAlign: "center" }}>Body Mass Index</h1>
      <p style={{ display: "flex", alignItems: "center" }}>
        <img
          src={chart}
          alt=""
          style={{
            width: "90vh",
            height: "60vh",
          }}
        />
      </p>
    </div>
  );
}

export default Documents;
