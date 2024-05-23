import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../Assets/phone.png";

function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center">
      <motion.section
        className="lg:w-1/2 lg:p-20 p-5 mt-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Video <span className="text-orange-500">Captioning</span> <br />
          Made Easy with <br />{" "}
          <span className="text-orange-500">Spyne Captions</span>
        </h1>
        <p className="text-lg lg:text-2xl mb-8">
          Easily add captions to your videos. Just enter the URL, input your
          captions, and watch your video with captions displayed in real-time.
        </p>
        <Link
          to="/main"
          className="w-full lg:w-auto px-8 py-3 bg-orange-500 text-black-500 font-bold rounded-full shadow-md hover:bg-orange-200"
        >
          Get Started
        </Link>
      </motion.section>

      <motion.section
        className="lg:p-20 lg:px-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={hero} alt="Phone" className="lg:w-[600px] w-60" />
      </motion.section>
    </div>
  );
}

export default Landing;
