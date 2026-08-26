import React from "react";
import { Link } from "react-router";

export const RecipeCard = (props) => {
  const { id, image, recipetitle, chefname, description, category } =
    props.recipe;

  return (
    <Link
      to={`/recipe/singlepage/${id}`}
      className="group block w-full max-w-sm overflow-hidden rounded-2xl 
      bg-slate-900 border border-slate-800 
      shadow-lg hover:shadow-2xl 
      hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover 
          group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={recipetitle}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category */}
        <span
          className="absolute top-4 left-4 
          bg-black/60 backdrop-blur-md 
          text-orange-400 text-xs font-semibold 
          px-3 py-1.5 rounded-full"
        >
          {category || "Recipe"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h1
          className="font-bold text-xl text-white 
          line-clamp-1 
          group-hover:text-orange-400 
          transition-colors duration-200"
        >
          {recipetitle}
        </h1>

        {/* Chef */}
        <p className="text-orange-400 text-sm font-medium mt-2">
          By {chefname}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mt-3 line-clamp-3">
          {description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-800">
          <span className="text-sm text-slate-500">View Recipe</span>

          <span
            className="text-orange-400 text-sm font-semibold 
            group-hover:translate-x-1 transition-transform duration-200"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
};
