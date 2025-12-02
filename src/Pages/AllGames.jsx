import { Star } from "lucide-react";
import React, { useState, useMemo } from "react";
import { Link, useLoaderData, useLocation } from "react-router";
import { motion } from "framer-motion";

const AllGames = () => {
  const data = useLoaderData();
  const location = useLocation();
  const selectedId = location.state?.selectedId; // যদি হোম থেকে ক্লিক করে আসে

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const categories = [
    "Open World",
    "Survival",
    "Action RPG",
    "Tactical FPS",
    "Racing",
    "Action-Adventure",
    "Online Battle Arena",
    "MOBA",
    "Shooter/FPS",
    "Battle Royale",
    "Military Shooter",
    "MMORPG",
    "Survival Horror",
    "Sports",
    "Gacha",
    "Life Simulation",
    "Soccer Simulation",
    "Roguelike",
    "Sandbox",
    "Party",
    "FPS",
  
  ];

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    if (selectedCategory !== "All") {
      result = result.filter((game) => game.category === selectedCategory);
    }

    if (sortOrder === "high") {
      result.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
    } else if (sortOrder === "low") {
      result.sort((a, b) => parseFloat(a.ratings) - parseFloat(b.ratings));
    }

    return result;
  }, [data, selectedCategory, sortOrder]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-base-300 py-10 px-4 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          All Games ({filteredAndSortedData.length})
        </h1>

        {/* Filter & Sort Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {/* Category Dropdown */}
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn bg-base-300 border-gray-600 hover:bg-base-100">
              {selectedCategory === "All" ? "All Categories" : selectedCategory}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-3 shadow-lg bg-base-300 rounded-box w-64 max-h-96 overflow-y-auto z-50 border border-gray-700"
            >
              <li
                onClick={() => setSelectedCategory("All")}
                className="cursor-pointer hover:bg-base-100 p-2 rounded-md"
              >
                <a>All Categories</a>
              </li>
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="cursor-pointer hover:bg-base-100 p-2 rounded-md"
                >
                  <a>{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sort Dropdown */}
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn bg-base-300 border-gray-600 hover:bg-base-100">
              Sort By Rating {sortOrder === "high" ? "High to Low" : sortOrder === "low" ? "Low to High" : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-3 shadow-lg bg-base-300 rounded-box w-56 z-50 border border-gray-700"
            >
              <li onClick={() => setSortOrder("none")} className="hover:bg-base-100 p-2 rounded-md cursor-pointer">
                <a>Default</a>
              </li>
              <li onClick={() => setSortOrder("high")} className="hover:bg-base-100 p-2 rounded-md cursor-pointer">
                <a>Highest Rated First</a>
              </li>
              <li onClick={() => setSortOrder("low")} className="hover:bg-base-100 p-2 rounded-md cursor-pointer">
                <a>Lowest Rated First</a>
              </li>
            </ul>
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSortOrder("none");
            }}
            className="btn btn-outline btn-error"
          >
            Reset
          </button>
        </div>

        {/* Games Grid - তোমার পুরানো ডিজাইন একদম একই */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedData.length > 0 ? (
            filteredAndSortedData.map((game) => (
              <div
                key={game.id}
                className={`group border rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 bg-base-100
                  ${
                    selectedId === game.id
                      ? "border-red-500 shadow-lg shadow-orange-500/50"
                      : "border-gray-600"
                  }`}
              >
                {/* Cover Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-52 xl:h-64">
                  <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="object-cover w-full h-full rounded-t-xl group-hover:opacity-90 transition-opacity"
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-white truncate">
                    {game.title}
                  </h3>

                  <div className="flex justify-between items-center">
                    <aside className="py-1 px-3 bg-yellow-700/60 rounded-full text-xs text-white">
                      {game.category}
                    </aside>

                    <aside className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star size={16} fill="gold" />
                      <span>{game.ratings}</span>
                    </aside>
                  </div>

                  {/* Same Button Style */}
                  <Link
                    to={`/gamesdetails/${game.id}`}
                    className="mt-auto text-center py-1.5 bg-base-300 border border-gray-700 
                      rounded-md text-sm font-medium hover:bg-base-200 
                      transition-all duration-300"
                  >
                    See More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 text-xl py-20">
              No games found in this category
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AllGames;