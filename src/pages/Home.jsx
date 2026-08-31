import React from "react";
import { Link } from "react-router";

const Home = () => {
  const categories = [
    { name: "Breakfast", icon: "🍳" },
    { name: "Lunch", icon: "🥗" },
    { name: "Dinner", icon: "🍝" },
    { name: "Desserts", icon: "🍰" },
    { name: "Drinks", icon: "🥤" },
  ];

  const featuredRecipes = [
    {
      title: "Creamy Garlic Chicken",
      chef: "Sanjeev Kapoor",
      category: "Dinner",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Classic Italian Pasta",
      chef: "Marco Pierre",
      category: "Lunch",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Fresh Garden Salad",
      chef: "Jamie Oliver",
      category: "Healthy",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f0e] text-white overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[720px] flex items-center">
        {/* Background glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl w-full mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-orange-400/20 bg-orange-400/5 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />

                <span className="text-sm text-orange-300">
                  Your personal recipe kitchen
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-[82px] font-bold leading-[0.95] tracking-tight mt-7">
                Good food.
                <br />
                <span className="text-orange-400">Great memories.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mt-7">
                Discover recipes worth making, create dishes worth remembering,
                and build your own personal cookbook.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/create-recipe"
                  className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-orange-500/10"
                >
                  Create a Recipe
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

                <Link
                  to="/recipe"
                  className="flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] px-7 py-4 rounded-xl font-semibold transition-all"
                >
                  Explore Recipes
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10 mt-12">
                <div>
                  <h3 className="text-2xl font-bold">100+</h3>
                  <p className="text-sm text-slate-500 mt-1">Recipes</p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-sm text-slate-500 mt-1">Chefs</p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <h3 className="text-2xl font-bold">20+</h3>
                  <p className="text-sm text-slate-500 mt-1">Categories</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
                  alt="Delicious food"
                  className="w-full h-[570px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Floating recipe */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
                          Featured Recipe
                        </span>

                        <h2 className="text-2xl font-bold mt-2">
                          Creamy Garlic Chicken
                        </h2>

                        <p className="text-slate-300 text-sm mt-1">
                          By Sanjeev Kapoor
                        </p>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 text-orange-400">
                        <span>★</span>
                        <span className="text-white text-sm">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative card */}
              <div className="absolute -left-8 top-16 hidden xl:block">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">
                      🔥
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Trending</p>

                      <p className="font-semibold">20 min recipes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Explore
            </p>

            <h2 className="text-4xl font-bold mt-2">What are you craving?</h2>
          </div>

          <Link
            to="/recipe"
            className="text-sm text-slate-400 hover:text-orange-400 transition"
          >
            View all recipes →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/recipe"
              className="group bg-[#111716] border border-white/[0.06] hover:border-orange-400/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="font-semibold mt-4">{category.name}</h3>

              <p className="text-xs text-slate-500 mt-1">Explore recipes</p>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURED RECIPES
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Handpicked
            </p>

            <h2 className="text-4xl font-bold mt-2">Recipes you'll love</h2>
          </div>

          <Link
            to="/recipe"
            className="hidden md:block text-sm text-slate-400 hover:text-orange-400 transition"
          >
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {featuredRecipes.map((recipe) => (
            <Link
              key={recipe.title}
              to="/recipe"
              className="group bg-[#111716] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition">
                  {recipe.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2">By {recipe.chef}</p>

                <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-sm text-slate-400">View recipe</span>

                  <span className="text-orange-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-[32px] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 via-[#111716] to-[#111716]">
          {/* Glow */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-orange-500/20 blur-[100px] rounded-full" />

          <div className="relative text-center px-6 py-20">
            <span className="text-4xl">👨‍🍳</span>

            <p className="text-orange-400 text-sm uppercase tracking-widest font-semibold mt-5">
              Your kitchen awaits
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Got a recipe worth sharing?
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto mt-5 leading-relaxed">
              Create your recipe, add your ingredients and instructions, and
              build your own digital cookbook.
            </p>

            <Link
              to="/create-recipe"
              className="inline-flex items-center gap-3 mt-8 bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-orange-500/20"
            >
              Create Your Recipe
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2026 Recipe Studio</p>

          <p className="text-sm text-slate-600">
            Made for people who love good food.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
