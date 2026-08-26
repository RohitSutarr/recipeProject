import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { RecipeCard } from "../context/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);

  const render = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return <div className="p-5">{data.length > 0 ? render : "Loading"}</div>;
};

export default Recipe;
