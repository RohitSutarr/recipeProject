import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router";

const Singlepage = () => {
  const { data } = useContext(recipecontext);

  const params = useParams();

  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);

  return (
    <div>
      <h1>{recipe.recipetitle}</h1>
    </div>
  );
};

export default Singlepage;
