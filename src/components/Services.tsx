export default Card;

import React from "react";
import Image from "next/image";
import Icon from "../assets/Interneticon.svg"

export function Card() {
  return (
    <div className="bg-[#FFF7ED] h-full flex flex-col justify-center items-center md:p-12 p-2 md:mx-20  m-4 rounded-lg  mb-14">
      <Image src={Icon} alt="internet icon" className="absolute left-32 mb-72 -mt-14 hidden md:block">

      </Image>
      <div className="py-16">

      
      <h1 className="font-grifter text-center font-extrabold md:p-14 p-6 sm:text-5xl text-3xl tracking-wide ">
       Elevate Your Digital Presence!
      </h1>

      <div className="mx-auto p-4  max-w-7xl px-4 lg:px-9">
        <div className="grid grid-cols-1 gap-y-12 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 ">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 80 80"
              >
                <path d="M 10 13 C 8.3550302 13 7 14.35503 7 16 L 7 56 C 7 57.64497 8.3550302 59 10 59 L 32 59 L 32 62 L 25.701172 62 L 19.763672 65.894531 L 19.720703 65.931641 C 19.26469 66.311652 19 66.875453 19 67.46875 L 19 69 L 61 69 L 61 67.46875 C 61 66.875454 60.733985 66.310547 60.279297 65.931641 L 60.236328 65.894531 L 54.298828 62 L 48 62 L 48 59 L 70 59 C 71.64497 59 73 57.64497 73 56 L 73 16 C 73 14.35503 71.64497 13 70 13 L 10 13 z M 10 15 L 70 15 C 70.56503 15 71 15.43497 71 16 L 71 56 C 71 56.56503 70.56503 57 70 57 L 48 57 L 32 57 L 10 57 C 9.4349698 57 9 56.56503 9 56 L 9 16 C 9 15.43497 9.4349698 15 10 15 z M 14 19 A 1 1 0 0 0 13 20 A 1 1 0 0 0 14 21 A 1 1 0 0 0 15 20 A 1 1 0 0 0 14 19 z M 18 19 A 1 1 0 0 0 17 20 A 1 1 0 0 0 18 21 A 1 1 0 0 0 19 20 A 1 1 0 0 0 18 19 z M 22 19 A 1 1 0 0 0 21 20 A 1 1 0 0 0 22 21 A 1 1 0 0 0 23 20 A 1 1 0 0 0 22 19 z M 26 19 A 1 1 0 0 0 25 20 A 1 1 0 0 0 26 21 A 1 1 0 0 0 27 20 A 1 1 0 0 0 26 19 z M 30 19 A 1 1 0 0 0 29 20 A 1 1 0 0 0 30 21 A 1 1 0 0 0 31 20 A 1 1 0 0 0 30 19 z M 34 19 A 1 1 0 0 0 33 20 A 1 1 0 0 0 34 21 A 1 1 0 0 0 35 20 A 1 1 0 0 0 34 19 z M 38 19 A 1 1 0 0 0 37 20 A 1 1 0 0 0 38 21 A 1 1 0 0 0 39 20 A 1 1 0 0 0 38 19 z M 42 19 A 1 1 0 0 0 41 20 A 1 1 0 0 0 42 21 A 1 1 0 0 0 43 20 A 1 1 0 0 0 42 19 z M 46 19 A 1 1 0 0 0 45 20 A 1 1 0 0 0 46 21 A 1 1 0 0 0 47 20 A 1 1 0 0 0 46 19 z M 50 19 A 1 1 0 0 0 49 20 A 1 1 0 0 0 50 21 A 1 1 0 0 0 51 20 A 1 1 0 0 0 50 19 z M 54 19 A 1 1 0 0 0 53 20 A 1 1 0 0 0 54 21 A 1 1 0 0 0 55 20 A 1 1 0 0 0 54 19 z M 58 19 A 1 1 0 0 0 57 20 A 1 1 0 0 0 58 21 A 1 1 0 0 0 59 20 A 1 1 0 0 0 58 19 z M 62 19 A 1 1 0 0 0 61 20 A 1 1 0 0 0 62 21 A 1 1 0 0 0 63 20 A 1 1 0 0 0 62 19 z M 66 19 A 1 1 0 0 0 65 20 A 1 1 0 0 0 66 21 A 1 1 0 0 0 67 20 A 1 1 0 0 0 66 19 z M 14 23 A 1 1 0 0 0 13 24 A 1 1 0 0 0 14 25 A 1 1 0 0 0 15 24 A 1 1 0 0 0 14 23 z M 66 23 A 1 1 0 0 0 65 24 A 1 1 0 0 0 66 25 A 1 1 0 0 0 67 24 A 1 1 0 0 0 66 23 z M 33.292969 25.292969 L 22.585938 36 L 33.292969 46.707031 L 34.707031 45.292969 L 25.414062 36 L 34.707031 26.707031 L 33.292969 25.292969 z M 46.707031 25.292969 L 45.292969 26.707031 L 54.585938 36 L 45.292969 45.292969 L 46.707031 46.707031 L 57.414062 36 L 46.707031 25.292969 z M 14 27 A 1 1 0 0 0 13 28 A 1 1 0 0 0 14 29 A 1 1 0 0 0 15 28 A 1 1 0 0 0 14 27 z M 66 27 A 1 1 0 0 0 65 28 A 1 1 0 0 0 66 29 A 1 1 0 0 0 67 28 A 1 1 0 0 0 66 27 z M 14 31 A 1 1 0 0 0 13 32 A 1 1 0 0 0 14 33 A 1 1 0 0 0 15 32 A 1 1 0 0 0 14 31 z M 66 31 A 1 1 0 0 0 65 32 A 1 1 0 0 0 66 33 A 1 1 0 0 0 67 32 A 1 1 0 0 0 66 31 z M 14 35 A 1 1 0 0 0 13 36 A 1 1 0 0 0 14 37 A 1 1 0 0 0 15 36 A 1 1 0 0 0 14 35 z M 66 35 A 1 1 0 0 0 65 36 A 1 1 0 0 0 66 37 A 1 1 0 0 0 67 36 A 1 1 0 0 0 66 35 z M 14 39 A 1 1 0 0 0 13 40 A 1 1 0 0 0 14 41 A 1 1 0 0 0 15 40 A 1 1 0 0 0 14 39 z M 66 39 A 1 1 0 0 0 65 40 A 1 1 0 0 0 66 41 A 1 1 0 0 0 67 40 A 1 1 0 0 0 66 39 z M 14 43 A 1 1 0 0 0 13 44 A 1 1 0 0 0 14 45 A 1 1 0 0 0 15 44 A 1 1 0 0 0 14 43 z M 66 43 A 1 1 0 0 0 65 44 A 1 1 0 0 0 66 45 A 1 1 0 0 0 67 44 A 1 1 0 0 0 66 43 z M 14 47 A 1 1 0 0 0 13 48 A 1 1 0 0 0 14 49 A 1 1 0 0 0 15 48 A 1 1 0 0 0 14 47 z M 66 47 A 1 1 0 0 0 65 48 A 1 1 0 0 0 66 49 A 1 1 0 0 0 67 48 A 1 1 0 0 0 66 47 z M 14 51 A 1 1 0 0 0 13 52 A 1 1 0 0 0 14 53 A 1 1 0 0 0 15 52 A 1 1 0 0 0 14 51 z M 18 51 A 1 1 0 0 0 17 52 A 1 1 0 0 0 18 53 A 1 1 0 0 0 19 52 A 1 1 0 0 0 18 51 z M 22 51 A 1 1 0 0 0 21 52 A 1 1 0 0 0 22 53 A 1 1 0 0 0 23 52 A 1 1 0 0 0 22 51 z M 26 51 A 1 1 0 0 0 25 52 A 1 1 0 0 0 26 53 A 1 1 0 0 0 27 52 A 1 1 0 0 0 26 51 z M 30 51 A 1 1 0 0 0 29 52 A 1 1 0 0 0 30 53 A 1 1 0 0 0 31 52 A 1 1 0 0 0 30 51 z M 34 51 A 1 1 0 0 0 33 52 A 1 1 0 0 0 34 53 A 1 1 0 0 0 35 52 A 1 1 0 0 0 34 51 z M 38 51 A 1 1 0 0 0 37 52 A 1 1 0 0 0 38 53 A 1 1 0 0 0 39 52 A 1 1 0 0 0 38 51 z M 42 51 A 1 1 0 0 0 41 52 A 1 1 0 0 0 42 53 A 1 1 0 0 0 43 52 A 1 1 0 0 0 42 51 z M 46 51 A 1 1 0 0 0 45 52 A 1 1 0 0 0 46 53 A 1 1 0 0 0 47 52 A 1 1 0 0 0 46 51 z M 50 51 A 1 1 0 0 0 49 52 A 1 1 0 0 0 50 53 A 1 1 0 0 0 51 52 A 1 1 0 0 0 50 51 z M 54 51 A 1 1 0 0 0 53 52 A 1 1 0 0 0 54 53 A 1 1 0 0 0 55 52 A 1 1 0 0 0 54 51 z M 58 51 A 1 1 0 0 0 57 52 A 1 1 0 0 0 58 53 A 1 1 0 0 0 59 52 A 1 1 0 0 0 58 51 z M 62 51 A 1 1 0 0 0 61 52 A 1 1 0 0 0 62 53 A 1 1 0 0 0 63 52 A 1 1 0 0 0 62 51 z M 66 51 A 1 1 0 0 0 65 52 A 1 1 0 0 0 66 53 A 1 1 0 0 0 67 52 A 1 1 0 0 0 66 51 z M 34 59 L 46 59 L 46 62 L 34 62 L 34 59 z M 26.298828 64 L 33 64 L 48 64 L 53.701172 64 L 58.273438 67 L 21.726562 67 L 26.298828 64 z"></path>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Web Solutions
            </h3>
            <p className="mt-4 text-sm text-gray-600">
            Transform your vision into a dynamic web presence with our team of developers. We craft websites that exceed your expectations, and here is the twist – start with a one-month commitment. If you ever need a break or have other priorities, you can pause. Your project, your schedule.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              App Development
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Elevate your mobile presence with custom apps created by our expert team. The best part is, the power is in your hands. Try our services for a month, and if you need to focus on other aspects of your business, you can pause your app development until you are ready to resume.
            </p>
          </div>
          {/* <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">SEO </h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div> */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">AI/ML</h3>
            <p className="mt-4 text-sm text-gray-600">
              Leverage the potential of AI and ML to gain insights and stay ahead of the competition. The twist here is that you are not locked into long-term commitments. Test our AI/ML services for a month, and if you need to pause for any reason, it is your call.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
