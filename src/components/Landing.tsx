import React from "react";
import Image from "next/image";
import Phone from "../assets/header.svg";

const Landing = () => {
  return (
    <div className="bg-[#eeebfe] h-full flex justify-center items-center md:p-10 md:m-16 m-6 mb-16 mt-8 rounded-lg shadow hover:bg-gray-100">
      <div className="flex flex-col items-center p-10">

      
      <h1 className="font-semibold  md:text-2xl"> DevDynasty</h1>
      <div className="flex md:flex-row flex-col md:mt-12 mt-8 justify-between">
        <div className="md:font-extrabold md:text-[60px] md:leading-[76px] text-4xl font-semibold leading-8">
          <h2 className="md:w-1/2 text-center">A Dev Agency With A Twist.</h2>
          {/* Unleash Your Digital Potential, Pause-Play-Progress */}
        </div>
        <div className="flex justify-center items-center md:mt-0 mt-8">
          <Image src={Phone} alt="header Image">

          </Image>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center  md:text-[30px] ">
        <h2 className="text-center w-full">Your business, your rules. Start, stop, or adjust your developer services at will.</h2>
        {/* Flexibility redefined. Pause and resume developer services as your business needs evolve. */}
        <button className="bg-[#111827] rounded-lg border-white text-white px-10 py-4 font-medium mt-4 hover:-translate-y-2 hover:shadow-4xl duration-300">See Plans</button>
      </div>
      </div>
    </div>
  );
};

export default Landing;
