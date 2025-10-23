import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcRating } from "react-icons/fc";
import { Star } from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";

const GamesDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [game, setGame] = useState(null);
  console.log(game);
  console.log(id);
  console.log(data);

  useEffect(() => {
    const gameId = parseInt(id);
    const foundGame = data.find((item) => item.id === gameId);
    setGame(foundGame);
  }, [data, id]);

  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="p-6 max-lg:text-center lg:flex lg:gap-3.5 lg:justify-center bg-base-300 rounded-t-2xl mt-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">{game.title}</h1>
          <div className="relative">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="mx-auto rounded-xl w-full h-[400px] max-sm:h-[200px] object-cover mb-6"
            />
            <span className="absolute bottom-2.5 right-2.5 bg-base-100 px-1.5 flex gap-1.5">
              <Star className="w-4.5"></Star>
              {game.ratings}
            </span>
          </div>
        </div>
        <p className="text-gray-300 lg:mt-11 lg:w-1/2">{game.description}</p>
      </div>
      <div className="flex gap-5 flex-wrap justify-between items-center p-6 bg-base-300 mb-10 rounded-2xl">
        <div className="bg-secondary px-3.5 py-1.5 rounded-2xl">
          {game.category}
        </div>

        <Link
          to="/allgames"
          state={{ selectedId: game.id }}
          className="flex items-center gap-2.5 py-2.5 bg-white/30 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:bg-gray-500 cursor-pointer"
        >
          <BiLeftArrow></BiLeftArrow>
          BACK
        </Link>

        <div className="bg-secondary px-3.5 py-1.5 rounded-2xl">
          {game.developer}
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
