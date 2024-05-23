import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import hero from '../Assets/phone.png'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="  flex lg:flex-row flex-col justify-between items-center ">


        <section className="lg:w-1/2 lg:p-20 p-5 mt-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Video <span className="text-orange-500">Captioning</span> <br />Made Easy with <br /> <span className="text-orange-500">Spyne Captions</span> 
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
        </section>




        <section className=" lg:p-20 lg:px-40  ">
         <img src={hero} alt="" className="lg:w-[600px] w-60 "/>
        </section>
      </div>
      {/* <Main/> */}
    </div>
  );
}

export default Landing;
