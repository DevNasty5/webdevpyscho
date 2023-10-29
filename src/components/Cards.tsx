import React, { useState } from 'react';
import Image from 'next/image';
import pic1 from "../assets/CardImages/1.png";
import pic2 from "../assets/CardImages/2.png";
import pic3 from "../assets/CardImages/3.png";
import pic4 from "../assets/CardImages/4.png";
import pic5 from "../assets/CardImages/5.png";

const images = [pic1, pic2, pic3, pic4, pic5];

const ImageCard: React.FC = ({ imageSrc }: { imageSrc: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className='max-w-md sm:w-96 h-96 m-4 p-2 hover:shadow-4xl place-self-center'>
      <div
        className='flex justify-center items-center'
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image className='' src={imageSrc} alt='Emoji' />
      </div>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <div className='flex sm:mt-28'>
      {images.map((src, index) => (
        <ImageCard key={index} imageSrc={src} />
      ))}
    </div>
  );
};

export default Cards;
