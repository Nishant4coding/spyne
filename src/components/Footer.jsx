import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

function Footer() {
  return (
    <div className="bottom-0 text-center bg-orange-500 w-full lg:text-3xl text-xl lg:p-2 p-1 fixed ">
    <div className="flex flex-row items-center justify-center lg:gap-5 gap-2 ">
      
      <Link to="https://www.linkedin.com/in/nishant-srivastava-/" className="font-bold">
        <RiLinkedinBoxFill />
      </Link>
      <Link to="https://github.com/Nishant4coding/" className="font-bold">
        <RiGithubFill />
      </Link>
      <Link to="https://www.instagram.com/srivastava4nishant" className="font-bold">
        <RiInstagramFill />
      </Link>
      <Link
        to="https://github.com/Nishant4coding/"
        className="font-bold"
      ></Link>
    </div>
    </div>
  );
}

export default Footer;
