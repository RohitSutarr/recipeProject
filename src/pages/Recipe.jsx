import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { RecipeCard } from "../context/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);

  const render = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <div className="min-h-screen bg-[#0b0f0e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Recipe Collection
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Discover Recipes
            </h1>

            <p className="text-slate-400 mt-3 max-w-xl">
              Browse your collection of delicious recipes and find something
              worth cooking today.
            </p>
          </div>

          {/* Recipe count */}
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              🍴
            </div>

            <div>
              <p className="text-lg font-bold leading-none">{data.length}</p>

              <p className="text-xs text-slate-500 mt-1">Recipes</p>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px bg-white/[0.06] mb-10" />

        {/* ================= RECIPES ================= */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {render}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="min-h-[450px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-4xl">
                🍳
              </div>

              <h2 className="text-2xl font-bold mt-6">No recipes yet</h2>

              <p className="text-slate-400 mt-3 leading-relaxed">
                Your recipe collection is empty. Create your first recipe and
                start building your personal cookbook.
              </p>

              <a
                href="/create-recipe"
                className="inline-flex items-center gap-2 mt-7 bg-orange-500 hover:bg-orange-400 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <span>+</span>
                Create Recipe
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
