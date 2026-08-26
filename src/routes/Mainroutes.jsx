import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipe from "../pages/Recipe";
import CreateRecipe from "../pages/CreateRecipe";
import Singlepage from "../pages/Singlepage";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/singlepage/:id" element={<Singlepage />} />

        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
