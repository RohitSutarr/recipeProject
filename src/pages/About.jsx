import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0b0f0e] text-white overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative">
        {/* Background glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                🍴 About Recipe Studio
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mt-7">
                More than
                <br />
                just a recipe
                <br />
                <span className="text-orange-400">collection.</span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mt-7">
                Recipe Studio is a simple and beautiful place to create,
                organize and discover recipes that make cooking more enjoyable.
              </p>

              <Link
                to="/recipe/create"
                className="inline-flex items-center gap-3 mt-8 bg-orange-500 hover:bg-orange-400 px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-orange-500/10"
              >
                Create Your Recipe
                <span>→</span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=90"
                  alt="Cooking food"
                  className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating quote */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <p className="text-lg font-medium leading-relaxed">
                      "Great food doesn't have to be complicated. It just needs
                      a good recipe."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=85"
                alt="Cooking together"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Floating number */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">01</p>

              <p className="text-sm mt-1">Our Story</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Cooking is better
              <br />
              when recipes are
              <br />
              <span className="text-orange-400">easy to remember.</span>
            </h2>

            <div className="space-y-4 mt-7 text-slate-400 leading-relaxed">
              <p>
                We created Recipe Studio with one simple idea: recipes should be
                easy to create, easy to find and enjoyable to use.
              </p>

              <p>
                Instead of keeping recipes scattered across notebooks,
                screenshots and bookmarks, Recipe Studio gives you one place to
                keep everything organized.
              </p>

              <p>
                Whether you're an experienced chef or someone learning their
                first recipe, this space is built to make your cooking journey
                simpler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
            What we believe
          </p>

          <h2 className="text-4xl font-bold mt-3">Built around good cooking</h2>

          <p className="text-slate-400 mt-4">
            Everything in Recipe Studio is designed around making recipes
            simple, useful and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="group bg-[#111716] border border-white/[0.06] rounded-2xl p-8 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ✨
            </div>

            <h3 className="text-xl font-bold mt-6">Keep It Simple</h3>

            <p className="text-slate-400 leading-relaxed mt-3">
              Recipes should be easy to understand without unnecessary
              complexity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#111716] border border-white/[0.06] rounded-2xl p-8 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ❤️
            </div>

            <h3 className="text-xl font-bold mt-6">Cook With Passion</h3>

            <p className="text-slate-400 leading-relaxed mt-3">
              Food is more than ingredients. It's creativity, memories and the
              people we share it with.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#111716] border border-white/[0.06] rounded-2xl p-8 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🚀
            </div>

            <h3 className="text-xl font-bold mt-6">Keep Creating</h3>

            <p className="text-slate-400 leading-relaxed mt-3">
              Your next favorite recipe might be something you create yourself.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#111716] border border-white/[0.06] rounded-[32px] p-8 md:p-12">
          <div className="text-center">
            <p className="text-orange-400 text-sm uppercase tracking-widest font-semibold">
              How it works
            </p>

            <h2 className="text-4xl font-bold mt-3">From idea to recipe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">
                01
              </div>

              <h3 className="text-xl font-bold mt-5">Create</h3>

              <p className="text-slate-400 mt-2 leading-relaxed">
                Add your recipe with an image, ingredients, instructions and
                category.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">
                02
              </div>

              <h3 className="text-xl font-bold mt-5">Organize</h3>

              <p className="text-slate-400 mt-2 leading-relaxed">
                Keep all your recipes organized in one convenient collection.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">
                03
              </div>

              <h3 className="text-xl font-bold mt-5">Cook</h3>

              <p className="text-slate-400 mt-2 leading-relaxed">
                Open your recipe whenever you're ready to get cooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-[32px] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 via-[#111716] to-[#111716]">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-orange-500/20 blur-[100px] rounded-full" />

          <div className="relative text-center px-6 py-20">
            <div className="text-4xl">👨‍🍳</div>

            <p className="text-orange-400 text-sm uppercase tracking-widest font-semibold mt-5">
              Start creating
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Your next great recipe
              <br />
              starts here.
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto mt-5 leading-relaxed">
              Create something delicious and add it to your personal recipe
              collection.
            </p>

            <Link
              to="/recipe/create"
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

export default About;
