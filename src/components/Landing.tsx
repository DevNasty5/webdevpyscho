import React from "react";
import Image from "next/image";

import Ghost from "../assets/ghost.png";
import Orange from "../assets/Orange.svg";

import "./style2.css";

const Wondered = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-orange-100 flex flex-col justify-center items-center p-6 md:pl-16 rounded-lg shadow">
      <div className="mx-auto text-center">
        <h3 className="mb-4 text-2xl font-bold tracking-wide text-gray-900">
          DevDynasty
        </h3>

        <div className="w-48 md:w-[220px] h-48 md:h-[220px] bg-white relative rounded-full md:align-center md:bottom-[-40px] md:right-[-290px] border-8 md:border-[20px] border-gray-100">
          <Image
            className="mx-auto w-10 md:w-20 relative -top-16 md:top-[-30px]"
            width={100}
            height={100}
            src={Orange}
            alt="/"
          />
          <Image
            className="w-28 md:w-[120px] relative mx-auto md:top-[-10px] animate-oscillate"
            width={100}
            height={100}
            src={Ghost}
            alt="/"
          />
        </div>

        <div className="p-6 md:p-24 text-center font-mono">
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-wide">
            A design agency <br /> with a twist
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl">Design subscriptions for everyone.</h2>
        <div>
          <a
            href="#_"
            className="inline-flex items-center justify-center m-3 md:m-6 py-4 md:py-10 px-6 md:px-12 font-bold text-xl tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            See plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wondered;
