import React from "react";
import Image from "next/image";
import Html from "../assets/html.svg";
import Php from "../assets/php.svg";
import Css from "../assets/css.svg";
import pic1 from "../assets/RecentWork/1.png";
import pic2 from "../assets/RecentWork/3.png";
import testimonial from "../assets/RecentWork/testimonial.png";
import trialshoppylogo from "../assets/RecentWork/Logo.png";

const RecentWork = () => {
  return (
    <div
      id="Rw"
      className="w-full relative flex justify-center items-center"
      style={{ backgroundColor: "#e1eaf4" }}
    >
      <div className="container p-6 sm:p-6 md:p-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center pb-4 sm:pb-6 md:pb-10">
          Recent Work
        </h1>
        <div className="mx-auto w-full sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-2xl border bg-black rounded-lg p-2 hover:-translate-y-2 hover:shadow-4xl duration-300 mb-4">
          <a
            href=""
            target="_blank"
            className="block text-center text-white font-bold text-lg md:py-2 md:px-4 py-1 px-2 rounded "
          >
            View Recent Work
          </a>
        </div>
        <Image
          src={Html}
          alt="html"
          className="absolute right-2 top-2 hidden md:block"
        ></Image>
        <Image
          src={Php}
          alt="php"
          className="absolute left-3 top-14 hidden md:block"
        ></Image>

        <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-7 md:py-8 md:px-16 md:my-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden  rounded-lg">
            <Image
              className="flex justify-center items-center w-full h-full object-cover rounded-lg"
              src={testimonial}
              alt=""
            />
          </div>

          <div className="flex justify-start items-center bg-white  shadow-md  md:max-w-none overflow-hidden h-full w-full rounded-lg p-5">
            <div className="flex flex-col items-center">
              <h1 className="md:text-[32px] text-[18px] font-semibold">
                What our clients say about us?
              </h1>
              <div className="md:mt-8 md:mb-8 mt-5 mb-5">
                <Image className="" src={trialshoppylogo} alt="" />
              </div>
              <p className="text-[18px] text-center">
                <span className="text-[24px] mt-10">&quot;</span>
                <strong>DevDynasty</strong> proved instrumental in elevating our e-commerce
                platform, TrialShoppy, to new heights. Their innovative design
                and seamless functionality integration have not only enhanced
                our user experience but also significantly boosted our online
                presence. We are immensely grateful for their expertise and
                commend their commitment to excellence.
                <span className="text-[24px]">&quot;</span>
                
              </p>
            </div>
          </div>
          {/* <Image src={Css} alt='css' className='absolute left-6 hidden md:block'>

          </Image> */}
          {/* Card 3 */}

          {/* <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' src={pic3} alt='' />
          </div>
    
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' src={pic4} alt='' />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
