import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import image from "../assets/image.png";

const CreateRecipe = () => {
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const rec = watch();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);

    reset();

    console.log(copydata);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      {/* Page Heading */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-orange-400 font-medium tracking-wider uppercase">
          Recipe Studio
        </p>

        <h1 className="text-4xl font-bold mt-2">Create Your Recipe</h1>

        <p className="text-slate-400 mt-2">
          Fill in the details and see your recipe come to life instantly.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= LEFT : FORM ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Recipe Details</h2>

            <p className="text-sm text-slate-400 mt-1">
              Enter the information about your recipe.
            </p>
          </div>

          <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-5">
            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Image URL
              </label>

              <input
                className={`w-full bg-slate-800/70 border ${
                  errors.image ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("image", { required: true })}
                type="url"
                placeholder="https://example.com/recipe.jpg"
              />

              {errors.image && (
                <small className="text-red-400 mt-1 block">
                  Please enter the image URL
                </small>
              )}
            </div>

            {/* Recipe Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Recipe Title
              </label>

              <input
                className={`w-full bg-slate-800/70 border ${
                  errors.recipetitle ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("recipetitle", { required: true })}
                type="text"
                placeholder="Chicken Noodle Soup"
              />

              {errors.recipetitle && (
                <small className="text-red-400 mt-1 block">
                  Please enter the recipe title
                </small>
              )}
            </div>

            {/* Chef Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Chef Name
              </label>

              <input
                className={`w-full bg-slate-800/70 border ${
                  errors.chefname ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("chefname", { required: true })}
                type="text"
                placeholder="Enter chef name"
              />

              {errors.chefname && (
                <small className="text-red-400 mt-1 block">
                  Please enter the chef name
                </small>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Description
              </label>

              <textarea
                rows="3"
                className={`w-full bg-slate-800/70 border ${
                  errors.description ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("description", { required: true })}
                placeholder="Write a short description..."
              />

              {errors.description && (
                <small className="text-red-400 mt-1 block">
                  Please enter the description
                </small>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Ingredients
              </label>

              <textarea
                rows="3"
                className={`w-full bg-slate-800/70 border ${
                  errors.ingredients ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("ingredients", { required: true })}
                placeholder="Chicken, garlic, onion, spices..."
              />

              {errors.ingredients && (
                <small className="text-red-400 mt-1 block">
                  Please enter the ingredients
                </small>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Instructions
              </label>

              <textarea
                rows="4"
                className={`w-full bg-slate-800/70 border ${
                  errors.instructions ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("instructions", { required: true })}
                placeholder="Explain the cooking steps..."
              />

              {errors.instructions && (
                <small className="text-red-400 mt-1 block">
                  Please enter the instructions
                </small>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>

              <select
                className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-3 outline-none cursor-pointer transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                {...register("category", { required: true })}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>

              {errors.category && (
                <small className="text-red-400 mt-1 block">
                  Please select a category
                </small>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 py-3 rounded-lg font-semibold text-white shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              Create Recipe
            </button>
          </form>
        </div>

        {/* ================= RIGHT : PREVIEW ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl h-fit">
          {/* Preview Header */}
          <div className="px-7 py-5 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
                  Live Preview
                </p>

                <h2 className="text-2xl font-semibold mt-1">Your Recipe</h2>
              </div>

              <span className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                Preview
              </span>
            </div>
          </div>

          {/* Preview Content */}
          <div className="p-7">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-slate-800">
              <img
                className="w-full h-72 object-cover"
                src={rec.image || image}
                alt={rec.recipetitle || "Recipe preview"}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-slate-950/80 backdrop-blur-sm text-orange-400 px-3 py-1.5 rounded-full text-xs font-medium">
                  {rec.category || "Breakfast"}
                </span>
              </div>
            </div>

            {/* Recipe Information */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold leading-tight">
                {rec.recipetitle || "The Best Chicken Noodle Soup Recipe"}
              </h1>

              <p className="text-orange-400 font-medium mt-2">
                By {rec.chefname || "Sanjeev Kapoor"}
              </p>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  Description
                </h3>

                <p className="text-slate-300 leading-relaxed mt-2">
                  {rec.description ||
                    "This creamy garlic parmesan chicken comes together in just 20 minutes for an effortless, comforting meal."}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  Ingredients
                </h3>

                <p className="text-slate-300 leading-relaxed mt-2">
                  {rec.ingredients ||
                    "Proteins: Chicken, beef, fish, tofu, and beans provide the main structural and filling part of a meal."}
                </p>
              </div>

              {/* Instructions */}
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
                  Instructions
                </h3>

                <p className="text-slate-300 leading-relaxed mt-2">
                  {rec.instructions ||
                    "In a medium glass bowl, whisk together the olive oil, minced garlic, dried oregano, salt, black pepper, and fresh lemon juice."}
                </p>
              </div>

              {/* Bottom Category */}
              <div className="mt-7 pt-5 border-t border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-500">Category</span>

                <span className="text-sm font-medium text-orange-400">
                  {rec.category || "Breakfast"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
