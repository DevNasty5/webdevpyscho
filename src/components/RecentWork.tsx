import React from 'react';
import Image from 'next/image';
import Html from "../assets/html.svg"
import Php from "../assets/php.svg"
import Css from "../assets/css.svg"

const RecentWork = () => {
  return (
    <div id='Rw' className='w-full relative' style={{ backgroundColor: '#e1eaf4' }}>
      <div className="container p-6 sm:p-12 md:p-24">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center pb-4 sm:pb-6 md:pb-10'>Recent Work</h1>
        <div className="mx-auto w-full sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-2xl border bg-black rounded-lg p-2 hover:-translate-y-2 hover:shadow-4xl duration-300 mb-4">
          <a href="" target="_blank" className="block text-center text-white font-bold text-lg md:py-2 md:px-4 py-1 px-2 rounded ">
            View Recent Work
          </a>
        </div>
          <Image src={Html} alt='html' className='absolute right-2 top-2 hidden md:block'>

          </Image>
          <Image src={Php} alt='php' className='absolute left-3 top-14 hidden md:block'>

          </Image>
        

        <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-7 md:py-8 md:px-16 md:my-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='flex justify-center items-center w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
          <Image src={Css} alt='css' className='absolute left-6 hidden md:block'>

          </Image>
          {/* Card 3 */}
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-md  md:max-w-none overflow-hidden">
            <Image className='w-full h-full object-cover' width={100} height={100} src="" alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;