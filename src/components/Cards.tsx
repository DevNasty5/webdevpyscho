"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
}

const Cards: React.FC<CardProps> = ({ imageSrc, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: color,
    transform: isHovered ? 'rotate(10deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      className='justify-between sm:mt-28'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={cardStyle}
        className='block max-w-md sm:w-96 h-56 m-4 p-6 border border-gray-200 rounded-lg  shadow hover:shadow-lg'
      >
        <Image className='h-16 w-16'  width={100} height={100} src={imageSrc} alt='Emoji' />
        <h2 className='mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 '>
          {title}
        </h2>
        <p className='font-normal text-gray-700 dark:text-gray-700'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
