import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300
    ${isActive ? "text-orange-400" : "text-slate-400 hover:text-white"}`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b0f0e]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto h-18 px-6 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <NavLink to="/" className="flex items-center gap-3 group">
          {/* Logo */}
          <div
            className="w-10 h-10 rounded-xl bg-orange-500
            flex items-center justify-center
            shadow-lg shadow-orange-500/20
            group-hover:scale-105 transition-transform duration-300"
          >
            <span className="text-xl">🍴</span>
          </div>

          {/* Brand */}
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg leading-none">
              Recipe<span className="text-orange-400">Studio</span>
            </h1>

            <p className="text-[10px] text-slate-500 mt-1 tracking-wider uppercase">
              Cook • Create • Share
            </p>
          </div>
        </NavLink>

        {/* ================= NAVIGATION ================= */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1">
          <NavLink to="/" end className={navStyle}>
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-orange-400 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-orange-400 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/recipe" className={navStyle}>
            {({ isActive }) => (
              <>
                Recipes
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-orange-400 rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3">
          {/* Search-looking button */}
          <NavLink
            to="/recipe"
            className="hidden lg:flex items-center gap-2 text-sm text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/10 px-4 py-2.5 rounded-xl transition-all"
          >
            <span>⌕</span>
            <span>Find a recipe</span>
          </NavLink>

          {/* Create Recipe */}
          <NavLink
            to="/create-recipe"
            className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-orange-500/10"
          >
            <span className="text-lg leading-none">+</span>

            <span className="hidden sm:inline">Create Recipe</span>

            <span className="sm:hidden">Create</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
