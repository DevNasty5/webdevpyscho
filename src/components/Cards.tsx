"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import pic1 from "../assets/CardImages/1.png";
import pic2 from "../assets/CardImages/2.png";
import pic3 from "../assets/CardImages/3.png";
import pic4 from "../assets/CardImages/4.png";
import pic5 from "../assets/CardImages/5.png";

const images = [pic1, pic2, pic3, pic4, pic5];

const Cards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardStyle = (index: number) => ({
    transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  });

  return (
    <div className='flex sm:mt-28 flex-col md:flex-row'>
      {images.map((src, index) => (
        <div
          key={index}
          className='max-w-md sm:w-96 md:h-96 md:m-4 md:p-2 m-2 p-1 hover:shadow-4xl place-self-center'
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='flex justify-center items-center' style={cardStyle(index)}>
            <Image src={src} alt='Emoji' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
