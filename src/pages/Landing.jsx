import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import hero from '../Assets/phone.png'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="  flex lg:flex-row flex-col justify-between items-center ">


        <section className="w-1/2 p-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Video <span className="text-orange-500">Captioning</span> Made Easy with <span className="text-orange-500">Spyne Captions</span> 
          </h1>
          <p className="text-lg lg:text-2xl mb-8">
            Easily add captions to your videos. Just enter the URL, input your
            captions, and watch your video with captions displayed in real-time.
          </p>
          <Link
            to="/main"
            className="px-8 py-3 bg-orange-500 text-black-500 font-bold rounded-full shadow-md hover:bg-orange-200"
          >
            Get Started
          </Link>
        </section>




        <section className=" p-20 px-40">
         <img src={hero} alt="" width={600} height={600} className=""/>
        </section>
      </div>
      {/* <Main/> */}
    </div>
  );
}

export default Landing;
