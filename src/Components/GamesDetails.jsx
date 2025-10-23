import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams, useNavigate } from "react-router";
import { FcOk } from "react-icons/fc";
import { Star } from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";
import { toast } from "react-toastify";

import installFile from "../assets/install_file.png"; 

const GamesDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const gameId = parseInt(id);
    const foundGame = data.find((item) => item.id === gameId);
    setGame(foundGame);
  }, [data, id]);

  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner w-20 h-20 border-[6px] text-primary"></span>
      </div>
    );
  }

  const handleInstall = (e) => {
    e.preventDefault();
    toast.success("Downloading started...", {
      position: "top-center",
      autoClose: 1000,
    });

    const link = document.createElement("a");
    link.href = installFile; 
    link.download = `${game.title || "game"}.jpg`;
    link.click();

    setTimeout(() => {
      navigate("/allgames", { state: { selectedId: game.id } });
      toast.success("Successfully installed on your device", {
        position: "top-center",
        autoClose: 1000,
      });
    }, 1500);
  };

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
              <Star className="w-4.5" />
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
          <BiLeftArrow className="bg-red-500 rounded-2xl" />
          BACK
        </Link>

        <h1 className="font-semibold text-white">OR</h1>

        <button
          onClick={handleInstall}
          className="flex items-center gap-2.5 py-2.5 bg-white/30 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:bg-gray-500 cursor-pointer"
        >
          INSTALL
          <FcOk />
        </button>

        <div className="bg-secondary px-3.5 py-1.5 rounded-2xl">
          {game.developer}
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
