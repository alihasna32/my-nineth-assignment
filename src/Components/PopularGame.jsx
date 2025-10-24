import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularGame = ({ data }) => {
  const [sort, setSort] = useState([])
  
  useEffect(() => {
    if(data && data.length > 0){
      const sliced = data.slice(5, 14);
      const sorted = sliced.sort((a,b) => b.ratings - a.ratings);
      setSort(sorted)
    }
  }, [data])
  return (
    <div className="my-10 px-4">
      <div className="tabs tabs-lifted">
        {/* Tab 1 */}
        <input
          type="radio"
          name="my_tabs_3"
          role="tab"
          className="tab bg-accent rounded-t-xl"
          aria-label="Popular Games"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-300 lg:px-6 py-4 rounded-md rounded-r-xl rounded-b-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {sort && sort.length > 0 ? (
              sort.map((game) => (
                <Link to={`/gamesdetails/${game.id}`}
                  key={game.id}
                  className="group border border-gray-600 rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300 bg-base-100"
                >
                  {/* Game Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-52 xl:h-64">
                    <img
                      src={game.coverPhoto}
                      alt={game.title}
                      className="object-cover w-full h-full rounded-t-xl group-hover:opacity-90"
                    />
                  </div>

                  {/* Game Info */}
                  <div className="p-4 flex flex-col justify-between h-[120px] sm:h-[100px]">
                    <h3 className="text-lg font-semibold text-white truncate mb-2">
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
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">
                No games available
              </p>
            )}
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-8">
            <Link to="/allgames" className="py-1.5 text-2xl font-semibold bg-[#4b748d84] px-5 rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:bg-gray-500 cursor-pointer">
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularGame;
