import React, { useRef, useEffect } from 'react';
import Cards from './Cards';
import { cardData } from '.';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HorizontalScrollCards = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const cardWidth = 300;
    const numCards = cardData.length;
    const totalWidth = cardWidth * numCards;

    // Check if the screen width is greater than or equal to a certain breakpoint
    const isLargeScreen = window.innerWidth >= 768; // You can adjust the breakpoint as needed

    if (isLargeScreen) {
      gsap.registerPlugin(ScrollTrigger);

      const pin = gsap.fromTo(
        sectionRef.current,
        {
          x: 0,
        },
        {
          x: `-${totalWidth + cardWidth}`,
          ease: 'none',
          duration: 10,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'bottom bottom',
            end: `+=${totalWidth - window.innerWidth + cardWidth}`,
            scrub: 0.6,
          },
        }
      );

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className="mt-[-30px]">
      <div className={`overflow-x-scroll ${window.innerWidth >= 768 ? 'md:overflow-hidden' : ''}`}>
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 w-screen" ref={sectionRef}>
          {cardData.map((card) => (
            <Cards key={card.id} />
          ))}
        </div>
      </div>
      {window.innerWidth >= 768 && <div className="md:hidden" ref={triggerRef}></div>}
    </div>
  );
};

export default HorizontalScrollCards;
