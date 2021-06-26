import { useEffect, useState, useContext } from "react";
import Recipe from "./Recipe";
import { Usercontext } from "../Usercontext";

const Recipes = () => {
  const { query, setQuery, submitHandler, search, setSearch } =
    useContext(Usercontext);

  const APP_ID = "9943e439";
  const APP_KEY = "99a5b88fa54099cb2c50efc554d10b0e	";

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
    console.log("useEffect");
  }, [query]);

  return (
    <div>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Food Calories"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
