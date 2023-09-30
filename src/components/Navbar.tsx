"use client"
import React, { useState } from "react";
import Image from 'next/image';
import { close, menu } from ".";
import { navLinks } from ".";
import mylogo from  "../assets/mylogo.svg";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed w-full sm:py-4  z-20 top-0 left-0 flex  bg-white justify-between items-center navbar" >
     <Image src={mylogo} height={100}  width={100} className=" ml-12 h-12 w-12 " alt="Flowbite Logo"/>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`group font-poppins cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-secondary font-semibold"
                : "text-dimWhite font-regular"
            } ${nav === navLinks[navLinks.length - 1] ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            {active === nav.title && (
              <div className="h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={100}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="fixed top-12 right-4 w-[140px] max-h-screen bg-black-gradient overflow-y-auto rounded-xl">
            <div className="flex flex-col p-4">
              {navLinks.map((nav) => (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } my-2`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </a>
              ))}
            </div>
          </div>
        )}
        
      </div>
      <button type="button" className="text-white bg-gray-900 hover:bg-gray-950 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-3 text-center mr-10 md:mr-12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">Download app</button>
    </nav>
  );
};

export default Navbar;
