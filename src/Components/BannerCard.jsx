import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React, { useRef } from 'react'

const BannerCard = ({data}) => {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="px-4">
        <div className="flex flex-col items-center justify-center grow lg:mb-10  ">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-3 w-full py-4 xl:mt-5"
        >
          {data?.slice(0,5).map((game) => (
            <div
              key={game.id}
              className="shrink-0 w-52 sm:w-80 md:w-[400px] lg:w-[300px] xl:w-[600px] h-[130px] sm:h-42 md:h-[200px] lg:h-[300px] relative cursor-pointer group transition-transform hover:scale-105 
               "
            >
              <img
                src={game.coverPhoto}
                alt={game.coverPhoto}
                className="h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black text-white text-xs sm:text-sm p-1 sm:p-2 rounded-b-md w-full text-center">
                {game.title}
              </div>
            </div>
          )) || <p className="text-white">No games available</p>}
        </div>
      </div>
      <div className="flex justify-center space-x-6 ">
          <button
            onClick={scrollLeft}
            className="p-3 max-lg:w-10 max-lg:h-10 bg-[#4b748d84] rounded-full hover:bg-gray-500 cursor-pointer transition shadow-md border"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="p-3  max-lg:w-10 max-lg:h-10 bg-[#4b748d84] rounded-full hover:bg-gray-500 cursor-pointer transition shadow-md text-base-300 border"
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>
    </div>
  )
}

export default BannerCard