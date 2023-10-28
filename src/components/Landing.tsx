import React from "react";
import Image from "next/image";
import Phone from "../assets/header.svg";

const Landing = () => {
  return (
    <div className="bg-[#eeebfe] h-full flex justify-center items-center p-10 m-16 rounded-lg shadow hover:bg-gray-100">
      <div className="flex flex-col items-center p-10">

      
      <h1 className="font-semibold  text-2xl"> DevDynasty</h1>
      <div className="flex md:flex-row flex-col mt-12 justify-between">
        <div className="font-extrabold text-[60px] leading-[96px]">
          <h2 className="w-1/2">A Dev Agency with a twist</h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Phone} alt="header Image">

          </Image>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <h2>Design subscriptions for everyone. Pause or cancel anytime.</h2>
        <button className="bg-[#111827] rounded-lg border-white text-white px-10 py-4 font-medium mt-4 hover:-translate-y-2 hover:shadow-4xl duration-300">See Plans</button>
      </div>
      </div>
    </div>
  );
};

export default Landing;
