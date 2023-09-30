"use client";
import React, { useState, useRef, useEffect } from 'react';
import "./style2.css";
import "intersection-observer";

const Text = () => {
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
    <div>
      <div className='flex flex-col  sm:flex-row justify-around sm:w-full w-[80vw] p-6 sm:p-10 mt-[8%]'>
        <div className='w-full sm:w-[20%]'>
          <h2 className='text-3xl font-bold text-center mb-5'>EQ beats IQ</h2>
        </div>
        <div className='w-full sm:w-[22%] text-base text-gray-700 font-medium mb-5'>
          <p className='text-lg'>
            People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className='w-full sm:w-[22%] text-gray-700 font-medium'>
          <p className='text-lg'>
            They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more per year.
          </p>
        </div>
      </div>
      <div className='mt-6 sm:mt-24'>
        <h2
          ref={elementRef}
          className={`font-bold text-gray-900 text-4xl sm:text-5xl relative ${slideInClass}`}
        >
          Does this sound familiar...
        </h2>
      </div>
    </div>
  );
};

export default Text;
