import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCard = ({ data }) => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center grow lg:mb-10">

        {/* MAIN CAROUSEL */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2500}
          className="w-full xl:mt-5"
        >
          {data?.slice(0, 5).map((game) => (
            <div
              key={game.id}
              className="h-[300px] sm:h-[400px] lg:h-[600px] cursor-pointer"
            >
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="h-full w-full object-cover rounded-md"
              />
              <p className="legend">{game.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerCard;
