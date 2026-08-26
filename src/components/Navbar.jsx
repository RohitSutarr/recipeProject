import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex w-screen h-14 justify-center gap-5 items-center border-b border-white/30">
      <NavLink className={(e) => (e.isActive ? "text-orange-400" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-400" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-400" : "")}
        to="/recipe"
      >
        Recipe
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-orange-400" : "")}
        to="/create-recipe"
      >
        CreateRecipe
      </NavLink>
    </div>
  );
};

export default Navbar;
