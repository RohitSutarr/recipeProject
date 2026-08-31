import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlepage = () => {
  const { data, setdata } = useContext(recipecontext);

  const params = useParams();

  const recipe = data.find((item) => params.id == item.id);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe Updated!!!");
  };

  const DeleteHandler = () => {
    const deleteup = data.filter((recipe) => recipe.id != params.id);
    setdata(deleteup);
    toast.error("Recipe Deleted!!!");
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Recipe Not Found</h1>
          <p className="text-slate-400 mt-2">
            The recipe you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-sm text-orange-400 font-medium uppercase tracking-widest">
          Recipe Manager
        </p>

        <h1 className="text-4xl font-bold mt-2">Recipe Details</h1>

        <p className="text-slate-400 mt-2">
          View, update or delete your recipe.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= LEFT : RECIPE ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl h-fit">
          {/* Image */}
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.recipetitle}
              className="w-full h-80 object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Category */}
            <span className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-orange-400 text-xs font-semibold px-4 py-2 rounded-full">
              {recipe.category}
            </span>
          </div>

          {/* Recipe Content */}
          <div className="p-7">
            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight">
              {recipe.recipetitle}
            </h1>

            {/* Chef */}
            <p className="text-orange-400 font-medium mt-2">
              By {recipe.chefname}
            </p>

            {/* Description */}
            <div className="mt-7">
              <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-400">
                Description
              </h2>

              <p className="text-slate-300 leading-relaxed mt-2">
                {recipe.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="mt-7">
              <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-400">
                Ingredients
              </h2>

              <div className="mt-3 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <p className="text-slate-300 leading-relaxed">
                  {recipe.ingredients}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-400">
                Instructions
              </h2>

              <div className="mt-3 bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <p className="text-slate-300 leading-relaxed">
                  {recipe.instructions}
                </p>
              </div>
            </div>

            {/* Recipe ID */}
            <div className="mt-7 pt-5 border-t border-slate-800 flex justify-between">
              <span className="text-sm text-slate-500">Recipe ID</span>

              <span className="text-sm text-slate-400">{recipe.id}</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT : EDIT FORM ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 shadow-xl h-fit">
          {/* Form Header */}
          <div className="mb-7">
            <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
              Edit Recipe
            </p>

            <h2 className="text-2xl font-semibold mt-1">Update Details</h2>

            <p className="text-sm text-slate-400 mt-1">
              Modify the recipe information below.
            </p>
          </div>

          <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-5">
            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Image URL
              </label>

              <input
                className={`w-full bg-slate-800/70 border ${
                  errors.image ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                defaultValue={recipe.image}
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
                defaultValue={recipe.recipetitle}
                {...register("recipetitle", { required: true })}
                type="text"
                placeholder="Recipe Title"
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
                defaultValue={recipe.chefname}
                {...register("chefname", { required: true })}
                type="text"
                placeholder="Chef Name"
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
                defaultValue={recipe.description}
                className={`w-full bg-slate-800/70 border ${
                  errors.description ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("description", { required: true })}
                placeholder="Description"
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
                defaultValue={recipe.ingredients}
                className={`w-full bg-slate-800/70 border ${
                  errors.ingredients ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("ingredients", { required: true })}
                placeholder="Ingredients"
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
                defaultValue={recipe.instructions}
                className={`w-full bg-slate-800/70 border ${
                  errors.instructions ? "border-red-500" : "border-slate-700"
                } rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-400 focus:ring-1 focus:ring-orange-400`}
                {...register("instructions", { required: true })}
                placeholder="Instructions"
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
                defaultValue={recipe.category}
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

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 py-3 rounded-lg font-semibold text-white shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Update Recipe
              </button>

              <button
                onClick={DeleteHandler}
                type="button"
                className="bg-red-500/10 border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white active:scale-[0.98] transition-all duration-200 py-3 rounded-lg font-semibold cursor-pointer"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
