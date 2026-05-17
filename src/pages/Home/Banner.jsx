import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { FaSearch, FaTrophy, FaUsers } from "react-icons/fa";

// carousel css
import "react-responsive-carousel/lib/styles/carousel.min.css";

// banner data
const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/HLG5mDBm/banner1.webp",
    title: "Unleash Your Creativity",
    highlight: "Amazing Rewards",
    description:
      "Join exciting contests in design, writing and gaming reviews.",
  },

  {
    id: 2,
    image: "https://i.ibb.co.com/VckYT302/finn.jpg",
    title: "Compete With Creative Minds",
    highlight: "Win Big Prizes",
    description:
      "Showcase your talent globally and become part of our community.",
  },

  {
    id: 3,
    image: "https://i.ibb.co.com/67ZnKxtL/golf.jpg",
    title: "Discover Trending Contests",
    highlight: "Start Winning",
    description: "Explore article writing, business ideas and UI/UX contests.",
  },
];

const Banner = () => {
  return (
    <div>
      {/* CAROUSEL */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* HERO SECTION */}
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    rgba(0,0,0,0.9),
                    rgba(0,0,0,0.5)
                  ),
                  url(${slide.image})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* CONTENT */}
              <div className="hero-content max-w-7xl w-full justify-start px-4 md:px-8 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-2xl text-white"
                >
                  
                  {/* TITLE */}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}

                    <span className="text-primary">{slide.highlight}</span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="py-6 text-lg text-gray-300">
                    {slide.description}
                  </p>

                  {/* SEARCH */}
                  <div className="join w-full max-w-xl bg-base-100 rounded-2xl overflow-hidden shadow-xl">
                    <div className="flex items-center gap-3 px-5 flex-1">
                      <FaSearch className="text-gray-400" />

                      <input
                        type="text"
                        placeholder="Search contests..."
                        className="w-full outline-none text-black"
                      />
                    </div>

                    <button className="btn px-3 rounded-l-2xl border-0 bg-primary text-white">
                      <FaSearch /> Search
                    </button>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button className="btn btn-primary rounded-xl">
                      Explore Contests
                    </button>

                    <button className="btn btn-primary btn-outline text-white rounded-xl hover:text-black">
                      Become Creator
                    </button>
                  </div>

                  
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
