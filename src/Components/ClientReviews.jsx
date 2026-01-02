// ClientReviews.jsx
import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// ClientReviews.jsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://i.pravatar.cc/100?img=1",
    review:
      "GameGub has completely transformed my gaming experience! The collection is amazing, and I always find the latest games I want. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://i.pravatar.cc/100?img=2",
    review:
      "Amazing service! The downloads are fast and easy. GameGub really cares about gamers. I am extremely satisfied with their platform.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Johnson",
    photo: "https://i.pravatar.cc/100?img=3",
    review:
      "I was skeptical at first, but GameGub exceeded my expectations. Great selection, smooth interface, and excellent support. A must-try for every gamer!",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    photo: "https://i.pravatar.cc/100?img=4",
    review:
      "The best gaming platform I've used. Reviews are real, and the community is supportive. I feel safe and confident downloading games from GameGub.",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Brown",
    photo: "https://i.pravatar.cc/100?img=5",
    review:
      "Smooth experience, tons of games, and fast downloads. GameGub is my go-to gaming platform now. Love the fake review concept; it’s very entertaining!",
    rating: 5,
  },
  {
    id: 6,
    name: "Sophia Wilson",
    photo: "https://i.pravatar.cc/100?img=6",
    review:
      "Fantastic experience! The interface is user-friendly, and the variety of games is huge. GameGub truly understands what gamers want.",
    rating: 5,
  },
];

const ClientReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 mx-auto py-12 overflow-hidden">
  <div className="text-center mb-8">
    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">What Our Clients Say</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Real experiences from gamers who trust GameGub and give us their feedback.
    </p>
  </div>

  <div className="sm:mx-4"> {/* negative margin remove extra space */}
    <Slider {...settings}>
      {reviews.map((review) => (
        <div key={review.id} className="px-2">
          <div className="bg-base-300 p-6 rounded-2xl h-full flex flex-col justify-between shadow-lg min-h-[300px]">
            <div className="text-gray-300 mb-4 relative">
              <FaQuoteLeft className="absolute top-0 left-0 text-gray-500 w-5 h-5" />
              <p className="italic text-gray-200 my-7">
                {review.review.length > 200
                  ? review.review.slice(0, 200) + "..."
                  : review.review}
              </p>
              <FaQuoteRight className="absolute bottom-0 right-0 text-gray-500 w-5 h-5" />
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 w-4 h-4" />
              ))}
            </div>

            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-600">
              <img
                src={review.photo}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white font-medium">{review.name}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
};

export default ClientReviews;
