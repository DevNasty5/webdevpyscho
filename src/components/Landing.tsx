import React from "react";
import Image from "next/image";

import "./style2.css";

const Wondered = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-orange-100 flex flex-col justify-center items-center p-6 md:pl-16 rounded-lg shadow">
      <div className="mx-auto text-center">
        <h3 className="mb-4 text-2xl font-bold tracking-wide text-gray-900">
          DevDynasty
        </h3>

        <Image
          className="w-16vw max-w-200px absolute top-15 left-0"
          src={
            "https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg"
          }
          height={200}
          width={200}
          alt="image 1 "
        />
        <Image
          className="w-16vw max-w-250px absolute top-13 right-0"
          src={
            "https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg"
          }
          alt="image 2"
          height={200}
          width={200}
        />
        <div className="p-6 md:p-14 text-center font-mono">
          <h1 className="font-extrabold text-5xl md:text-8xl tracking-wide">
            A design agency <br /> with a twist
          </h1>
        </div>

        <h2 className="  text-xl md:text-2xl">
          Design subscriptions for everyone. Pause or cancel anytime.
        </h2>
        <div>
          <a
            href="#_"
            className="inline-flex items-center justify-center m-3 md:m-6 py-4 md:py-6 px-6 md:px-12 font-bold text-xl tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            See plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wondered;
