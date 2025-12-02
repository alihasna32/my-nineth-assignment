// GamesDetails.jsx
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams, useNavigate } from "react-router";
import { FcOk } from "react-icons/fc";
import { Star } from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";
import { toast } from "react-toastify";
import { motion } from "motion/react";
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
    toast.success("Downloading started...", { position: "top-center", autoClose: 1000 });

    const link = document.createElement("a");
    link.href = installFile; 
    link.download = `${game.title || "game"}.jpg`;
    link.click();

    setTimeout(() => {
      navigate("/allgames", { state: { selectedId: game.id } });
      toast.success("Successfully installed on your device", { position: "top-center", autoClose: 1000 });
    }, 1500);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header + Cover */}
      <div className="lg:flex lg:gap-6 bg-base-300 rounded-2xl p-6 items-start">
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start relative">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="rounded-xl w-full h-64 max-sm:h-48 object-cover mb-4"
          />
          <div className="absolute bottom-5.5 right-2.5 flex items-center gap-2 mt-2 bg-base-100 p-1 rounded-xl">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-medium text-white">{game.ratings}</span>
          </div>
        </div>

        <div className="lg:w-2/3 mt-4 lg:mt-0 text-gray-300 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white">{game.title}</h1>
          <p className="text-gray-300">{game.description}</p>

          {/* Scrollable Info Panel */}
          <div className="bg-base-100 rounded-2xl p-4 min-h-64  shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">Game Information</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Category:</span>
                <span>{game.category}</span>
              </div>
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Developer:</span>
                <span>{game.developer}</span>
              </div>
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Release Year:</span>
                <span>{game.releaseYear}</span>
              </div>
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Size:</span>
                <span>{game.size}</span>
              </div>
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Mode:</span>
                <span>{game.mode}</span>
              </div>
              <div className="flex justify-between bg-gray-800/30 px-4 py-2 rounded-lg">
                <span className="font-medium">Age Rating:</span>
                <span>{game.ageRating}</span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h2 className="font-semibold text-white mb-2">Platforms:</h2>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((platform, idx) => (
                <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">{platform}</span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h2 className="font-semibold text-white mb-2">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag, idx) => (
                <span key={idx} className="font-extrabold italic px-1 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/allgames"
                state={{ selectedId: game.id }}
                className="flex items-center gap-2.5 py-2.5 bg-white/30 px-6 rounded-full shadow-md hover:bg-gray-500 cursor-pointer"
              >
                <BiLeftArrow className="bg-red-500 rounded-2xl p-0.5" /> BACK
              </Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInstall}
              className="flex items-center gap-2.5 py-2.5 bg-white/30 px-6 rounded-full shadow-md hover:bg-green-500 cursor-pointer"
            >
              INSTALL <FcOk />
            </motion.button>
          </div>

          {/* Download Link */}
          {game.downloadLink && (
            <div className="mt-4">
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-200"
              >
                Official Download Page
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
