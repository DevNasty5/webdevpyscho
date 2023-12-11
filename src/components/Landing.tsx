import React from "react";
import Image from "next/image";
import Phone from "../assets/header.svg";

const Landing = () => {
  const SeePlans = () => {
    // Assuming "pricing" is an element with an id
    const pricingElement = document.getElementById('pricing');

    if (pricingElement) {
      // Scroll to the "pricing" section
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-[#eeebfe] h-full flex justify-center items-center md:my-20 m-6 mb-16 md:mx-36  rounded-lg shadow ">
      <div className="flex flex-col items-center p-10">


        <h1 className="font-semibold  md:text-2xl"> DevDynasty</h1>
        <div className="flex md:flex-row flex-col md:mt-12 mt-4 justify-between">

        <div className="md:font-bold md:text-[70px] md:leading-[100px] text-4xl font-semibold leading-10 text-center md:text-left">
  <h2 className="mb-4 mt-4 md:mb-0">A dev <br className="md:hidden"/>agency with<br className="md:hidden"/> a twist</h2>
 
</div>


          <div className=" flex justify-center items-center md:mt-0 mt-8 -right-6">
            <Image src={Phone} alt="header Image" className=" h-72">

            </Image>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center  md:text-[20px]  mt-6">
          <h2 className="text-center font-normal w-full">Your business, your rules. Start, stop, or adjust your developer services at will.</h2>
          {/* Flexibility redefined. Pause and resume developer services as your business needs evolve. */}
          <button className="bg-[#111827] rounded-lg border-white text-white px-10 py-4 font-medium mt-4 hover:-translate-y-2 hover:shadow-4xl duration-300 " onClick={SeePlans}>See Plans</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
