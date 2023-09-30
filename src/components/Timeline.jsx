"use client";
import React,{useState,useEffect,useRef} from "react";
import "intersection-observer";


const Timeline = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.01 } // Adjust the threshold as needed
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
    const slideInClass = isVisible ? 'slide-in' : '';
  return (
    <div className="mt-[13%] ">
      <div>
        <h2 className="font-semibold mb-4">Wrong with self-improvement & how were fixing it.</h2>
        <h1 ref={elementRef} className={`font-bold text-gray-900 mb-6 sm:text-5xl text-4xl relative ${slideInClass}`}>
          Self-improvement. Ugh.
        </h1>
      </div>
      <div className="sm:ml-48">
        <ol class="relative border-l border-gray-200 dark:border-[#6240ee]">
        <span class="absolute flex h-6 w-6 ml-[-12px] mt-[1px]">
          <span class="absolute inline-flex animate-ping h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      
        </span>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-[#6240ee] dark:bg-[#6240ee]"></div>
            <h2 className="text-md font-semibold mb-[-14px]">Its not easy as 1-2-3.</h2>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p class=" w-[80%] mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <span class="absolute flex h-6 w-6 ml-[-12px] mt-[1px]">
          <span class="absolute inline-flex animate-ping h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      
        </span>
          <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-[#6240ee] dark:bg-[#6240ee]"></div>
          <h2 className="text-md font-semibold mb-[-14px]">Its not easy as 1-2-3.</h2>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p class="w-[80%] text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <span class="absolute flex h-6 w-6 ml-[-12px] mt-[1px]">
          <span class="absolute inline-flex animate-ping h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      
        </span>
          <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-[#6240ee] dark:bg-[#6240ee]"></div>
          <h2 className="text-md font-semibold mb-[-14px]">Its not easy as 1-2-3.</h2>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p class="w-[80%] text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
          <span class="absolute flex h-6 w-6 ml-[-12px] mt-[1px]">
          <span class="absolute inline-flex animate-ping h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      
        </span>
          <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-[#6240ee] dark:bg-[#6240ee]"></div>
          <h2 className="text-md font-semibold mb-[-14px]">Its not easy as 1-2-3.</h2>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p class="w-[80%] text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-top from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Timeline;
