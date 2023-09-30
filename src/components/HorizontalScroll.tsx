"use client"
import React, { useRef, useEffect } from 'react';
import Cards from './Cards';
import { cardData } from '.';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HorizontalScrollCards = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const cardWidth = 300;
    const numCards = cardData.length;

    const totalWidth = cardWidth * numCards;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${totalWidth + cardWidth}px`,
        ease: 'none',
        duration: 5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'bottom bottom',
          end: `+=${totalWidth - window.innerWidth + cardWidth}px`,
          scrub: 0.6,
        },
      }
    );
    return () => {
      {
        pin.kill();
      }
    };
  }, []);

  return (
    <div className="mt-[-30px] ml-4 mr-4 md:ml-48 md:mr-48">
      <div className="overflow-x-scroll md:overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 w-screen" ref={sectionRef}>
          {cardData.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc.src}
              color={card.color}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden" ref={triggerRef}></div>
    </div>
  );
};

export default HorizontalScrollCards;
