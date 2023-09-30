import React from 'react'
import flower from '../assets/flower.png'
import Image from 'next/image';
import Ghost from '../assets/ghost.png';
import Pink from '../assets/gulabi.svg';
import Orange from '../assets/Orange.svg';
import greenVec from '../assets/greenVec.svg';
import './style2.css';


const Ahead = () => {
  return (
    <div className="mt-24 bg-orange-50 overflow-hidden block sm:w-full w-[80vw] sm:py-12 py-4  sm:pl-16 rounded-lg shadow  hover:bg-orange-50">
      <div className=' relative text-right'>
        <Image className='w-10 relative left-[1300px]  top-[-65px]  '  width={100} src={flower} alt="" />
        <Image className='w-20 relative left-[1250px] top-[-20px] animate-revolve'  width={100} src={greenVec} alt=''/>
      </div>
      <div className="mt-[3%] sm:ml-0 ml-[15%]">
        <h5 className="mb-2 font-semibold tracking-tight text-gray-900">
          Built out of fustration
        </h5>
        <h1 className="font-bold text-5xl sm:w-[40%] ">
          Meet the ahead app
        </h1>
      </div>
      <div className="flex   my-10">
        <div className='relative flex top-[70px] '>
        <div className="w-[300px] h-[300px] relative left-[-180px] rounded-full bg-orange-100  ">
            <div className='w-[220px] h-[220px] bg-white relative rounded-full top-[-50px] right-[-240px] border-[20px] border-gray-100 '>
              <Image className='mx-auto w-10 relative top-[-30px] '  width={100} height={100} src={Orange} alt='/' />
              <Image className='w-[120px] relative  mx-auto top-[-10px] animate-oscillate '  width={100} height={100} src={Ghost} alt='/' />
            </div>
          </div>
          <div className='illustrations px-6 flex flex-col gap-5 '>
            <Image className='w-7 relative left-[70px] animate-revolve' src={Pink} alt='' />
            <Image className='w-20 animate-revolve'  width={100} height={100} src={greenVec} alt='' />
            <Image className='w-12 relative right-5'  width={100} height={100} src={Orange} alt='' />
            
          </div>
          <div className='text max-w-lg relative left-80'>
              <h3 >
                Lorem ipsum dolor sit amet concing elit. Culpa consectetur voluptas neque expedita porro reprehenderit sapiente quos sequi autem quod.
              </h3>
              <br />
              <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa, animi tenetur accusamus cum minus lab
              </h3>
          </div>
        </div>
      </div>
      <div className=" ">

      </div>

    </div>
    

    
  );

}

export default Ahead;