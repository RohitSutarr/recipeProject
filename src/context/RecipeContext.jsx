import React, { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setdata] = useState([
    {
      id: "recipe-001",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      recipetitle: "Creamy Garlic Chicken",
      chefname: "Sanjeev Kapoor",
      description:
        "A creamy and delicious garlic chicken recipe that is easy to prepare and perfect for dinner.",
      ingredients:
        "Chicken, garlic, butter, cream, black pepper, salt, oregano",
      instructions:
        "Heat butter in a pan. Add garlic and chicken. Cook until golden. Add cream and seasonings. Simmer for a few minutes and serve hot.",
      category: "cat1",
    },
  ]);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
