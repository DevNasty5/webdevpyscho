import React from 'react';
import cssImage from '../assets/css.png';
import phpImage from '../assets/php.png';
import htmlImage from '../assets/html.png';
import Image from 'next/image';

const RecentWork = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen' style={{ backgroundColor: '#e1eaf4' }}>
      <div className="container p-6 sm:p-12 md:p-24">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center pb-4 sm:pb-6 md:pb-10'>Recent Work</h1>
        <div className='relative'>
        <Image className='absolute flex justify-center items-center place-items-start height-1 object-cover -left-64 -top-24' src={phpImage} alt="" />
        <div className="mx-auto w-full h-auto sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-2xl border bg-black rounded-lg p-2 hover:-translate-y-2 hover:shadow-4xl duration-300">
          <a href="" target="_blank" className="block text-center text-white font-bold text-lg py-2 px-4 rounded ">
            View Recent Work
          </a>
        </div>
        <Image className='absolute flex justify-center items-center place-items-end width-1 height-1 object-cover -right-72 -top-44' src={htmlImage} alt="" />
        </div>
        <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-7 my-6 sm:my-8 md:my-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md md:max-w-none overflow-hidden">
            <Image className='flex justify-center items-center w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
          {/* Card 3 */}
            <div className="bg-white shadow-md md:max-w-none overflow-hidden">
              <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
            </div>

              <Image className='object-cover absolute left-24' src={cssImage} alt="" />
        
          {/* Card 4 */}
          <div className="bg-white shadow-md md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;