import React from "react";

function Documents() {
  return (
    <div className="documentscontainer">
      {" "}
      <h1>Body Mass Index</h1>
      <p>
        <img
          src="/BMI_chart.png"
          alt=""
          style={{ width: "600px", height: "300px" }}
        />
      </p>
    </div>
  );
}

export default Documents;
