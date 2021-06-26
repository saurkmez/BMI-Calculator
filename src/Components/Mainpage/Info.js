import React from "react";

function Info() {
  return (
    <div>
      <div className="infomaincontainer">
        <div className="infotextcontainer">
          <h1 style={{ textAlign: "center" }}> What's the BMI?</h1>
          <p>
            {" "}
            Body mass index (BMI) is a measure of body fat based on height and
            weight that applies to adult men and women. View the BMI tables or
            use the tool below to compute yours. Enter your weight and height
            using standard or metric measures. Select "Calculate" and your BMI
            will appear below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
