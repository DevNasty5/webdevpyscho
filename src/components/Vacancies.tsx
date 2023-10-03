"use client"
import React, { useRef, useEffect, useState } from 'react';
import './style2.css';
import 'intersection-observer';

const Vacancies = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardClass = isVisible ? 'animate-pop-and-scale' : '';

  return (
    <div className=" overflow-hidden block sm:w-full  py-12   pl-16 rounded-lg ">
      <div>
        <h1 className="text-3xl text-center tracking-wider font-bold">Apps, websites, logos & more.</h1>
      </div>
      <div className="flex flex-col sm:flex-row py-14 mr-12 sm:justify-between">
        <div
          ref={cardRef}
          className={`mb-6 px-5 h-[200px] sm:w-[370px] w-[320px] rounded-2xl bg-orange-50 ${cardClass}`}
        >
          <div className="relative my-auto leading-loose mx-auto ">
            <h1 className="text-lg py-6 font-semibold">Website Development</h1>
            <ul>
              <li>• Full time position</li>
              <li>• Berlin or remote</li>
              <li>• $65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
        </div>
        <div
          ref={cardRef}
          className={`mb-6 px-5 h-[200px] sm:w-[370px] w-[320px] rounded-2xl bg-orange-50 ${cardClass}`}
        >
          <div className="relative my-auto leading-loose mx-auto ">
            <h1 className="text-[15px] py-6 font-semibold">App Development</h1>
            <ul>
              <li>• Full time position</li>
              <li>• Berlin or remote</li>
              <li>• $40-55k, 0.25-0.50% equity share </li>
            </ul>
          </div>
        </div>
        <div
          ref={cardRef}
          className={`px-5 h-[200px] sm:w-[370px] w-[320px] rounded-2xl bg-orange-50 ${cardClass}`}
        >
          <div className="relative my-auto leading-loose mx-auto ">
            <h1 className="text-lg py-6 font-semibold">SEO enhancer</h1>
            <ul>
              <li>• Full time position</li>
              <li>• Berlin or remote</li>
              <li>• $20-24k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Vacancies;
