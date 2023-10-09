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
    // backgroundColor: color,
    transform: isHovered ? 'scale(125%)' : 'scale(100%)',
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
        className='block max-w-md sm:w-96 h-96 m-4 p-6 border border-gray-200 shadow hover:shadow-2xl place-self-center'
      >
        <div className='flex justify-center items-center'>
        <Image className='h-16 w-16 ' width={100} height={100} src={imageSrc} alt='Emoji' />
      </div>
      </div>
    </div>
  );
};

export default Cards;
