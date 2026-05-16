import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const CreativeBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  // Framer Motion Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 select-none">
      <div className="relative bg-[#F3E8FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[300px] shadow-sm">
        {/* Background Infinite Moving Marquee (Framer Motion) */}
        <div className="absolute inset-0 pointer-events-none flex items-center overflow-hidden opacity-5 z-0 whitespace-nowrap">
          <motion.div
            className="text-7xl font-extrabold uppercase tracking-widest text-[#4C1D95]"
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            Design • Build • Game • Write • Compete • Create • Design • Build •
            Game • Write • Compete • Create •
          </motion.div>
        </div>

        {/* Left Decorative Corner Accent */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-1.5 opacity-40 z-10">
          <div className="border-l-2 border-b-2 border-[#4C1D95] w-5 h-5"></div>
          <div className="flex gap-1 pl-1">
            <span className="w-1.5 h-1.5 bg-[#4C1D95] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#4C1D95] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#4C1D95] rounded-full"></span>
          </div>
        </div>

        {/* Left Content Area */}
        <motion.div
          className="z-10 max-w-xl text-center md:text-left space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-4.5xl font-black text-[#3B0764] tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Find Your Next Challenge.
            <br className="hidden md:inline" /> Explore Creative Contests
          </motion.h1>

          {/* Animated Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            className="relative max-w-md w-full bg-white rounded-full border border-purple-100 shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:border-purple-300 flex items-center p-1.5 pl-5 transition-all duration-300"
            variants={fadeInUp}
          >
            <input
              type="text"
              placeholder="Search by Contest Type (e.g., Logo, Essay, Gaming)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm font-medium text-gray-700 bg-transparent focus:outline-none placeholder-gray-400"
            />
            <motion.button
              type="submit"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-3 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5 stroke-[2.5]" />
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Illustration Area with Hover Pop Effect */}
        <motion.div
          className="relative mt-8 md:mt-0 flex items-end justify-center md:justify-end w-full md:w-auto z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          {/* Floating Triangles using Tailwind */}
          <div className="absolute top-0 left-8 text-[#7C3AED] opacity-30 animate-bounce text-sm">
            ▲
          </div>
          <div className="absolute bottom-10 right-4 text-[#7C3AED] opacity-20 animate-pulse text-xs transform rotate-45">
            ▲
          </div>

          {/* Main Characters Image Asset */}
          <img
            src="banner-group.png"
            alt="Creative contests illustration"
            className="h-52 md:h-64 object-contain filter drop-shadow-sm select-none pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeBanner;
