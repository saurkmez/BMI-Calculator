import React from "react";

const Recipe = ({ label, calories, image }) => {
  return (
    <div className="recipe">
      <h1>{label}</h1>
      <p> {calories} </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
