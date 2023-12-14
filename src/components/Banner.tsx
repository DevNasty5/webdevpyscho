"use client"
import React, {useState} from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Image {
  id: string;
  image: StaticImageData;
}

interface BannerProps {
  images: Image[];
  speed?: number;
}
const Banner: React.FC<BannerProps> = ({ images, speed = 8000 }) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="inner md:pt-10 md:h-[30rem] h-[20rem]">
    <div className="wrapper">
      {Array.from({ length: 3 }).map((_, index) => (
        <section
          key={index}
          className={`section ${isPaused ? "paused" : ""}`}
          style={{ "--speed": `${speed}ms` } as React.CSSProperties}
        >
          {images.map(({ id, image }) => (
            <div
              className="image"
              key={id}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Image className="img" src={image} alt={`Image ${id}`} />
            </div>
          ))}
        </section>
      ))}
    </div>
  </div>
  );
};

export { Banner };
