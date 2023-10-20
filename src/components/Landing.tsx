import React from "react";
import Image from "next/image";
import Phone from "../assets/phonee.svg";
import code from "../assets/code.png"

const Landing = () => {
  return (
    <div className="bg-[#eeebfe] block sm:w-full w-[80vw] justify-center p-6 sm:pl-16 rounded-lg shadow hover:bg-gray-100">
      
      <center>
            <p className="mb-2  font-bold text-2xl tracking-tight text-gray-900">
              Dev Dynasty
            </p >
            </center>
            <div className="flex flex-col md:flex-row">
   
        <div className="md:w-1/2">
       
          <div className="mt-[10%]">
            
          <h1 className="font-extrabold text-4xl md:text-7xl tracking-wide">
            A design  <br />  agency with  <br />a twist
          </h1>
        
          </div>
          <div className="flex sm:mb-48 mb-16">
           
           
          </div>
        </div>
        {/* <div className="hidden md:block md:w-1/2">
          <Image src={code} className=" ml-16 h-[89%] w-[50%] " alt="phone" />
        </div> */}
      </div>
      <center>

      <h2 className="  text-xl md:text-2xl">
          Design subscriptions for everyone. Pause or cancel anytime.
        </h2>

          <a
            href="#_"
            className="inline-flex items-center justify-center m-3 md:m-6 py-4 md:py-6 px-6 md:px-12 font-bold text-xl tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            See plans
          </a>
          </center>
    </div>
  );
};

export default Landing;
