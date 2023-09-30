import React from 'react'
import Image from 'next/image';
import sun1 from '../assets/sun1.png'
import sun2 from '../assets/sun2.png'
import sun3 from '../assets/sun3.png'
import line from '../assets/line.svg';
import "./style2.css";


const Wondered = () => {
  return (
    <div className="relative my-[100px] overflow-hidden bg-blue-100 block sm:w-full w-[80vw] p-6 pl-16 rounded-lg shadow">
      <div className="mt-[4%] mx-auto  text-center ">
        <h5 className="mb-4  font-normal tracking-wide  text-gray-900">
          Let your friends, family, and co-workers (anonymously) rate your social skills.
        </h5>
        <h1 className="font-bold sm:text-5xl text-3xl tracking-wide ">
          Ever wondered what others think of you?
        </h1>
      </div>
      
        <div className=" py-24 z-30 justify-between flex gap-0 px-[10%] px-auto">
          <div className=' relative '>
          <span className="absolute flex ml-[90px] mt-2 h-8 w-8 ">
          <span className="absolute inline-flex animate-ping h-full w-full rounded-full bg-orange-400 opacity-75"></span>
      
        </span>
            <Image className='w-12 mx-auto animate-revolve '  width={100} src={sun1} alt='' />
           
            <h4 className='text-xs py-1'>Answer questions on your social skills</h4>
          </div>


          <div className='relative'>
          <span className="absolute flex ml-[90px] mt-2 h-8 w-8 ">
          <span className="absolute inline-flex animate-ping h-full w-full rounded-full bg-orange-400 opacity-75"></span>
      
        </span>
            <Image className='w-12 mx-auto animate-revolve '  width={100} src={sun2} alt='' />
            <h4 className='text-xs py-1'>Answer questions on your social skills</h4>

          </div>



          <div className=' relative '>
          <span className="absolute flex ml-[90px] mt-2 h-8 w-8 ">
          <span className="absolute inline-flex animate-ping h-full w-full rounded-full bg-orange-400 opacity-75"></span>
      
        </span>
            <Image className='w-12 mx-auto animate-revolve '  width={100} src={sun3} alt='' />
            <h4 className='text-xs py-1'>Answer questions on your social skills</h4>

          </div>

        </div>
        <div  className=' z-0 relative top-[-160px]'>
        <Image className='relative mx-auto w-[780px] my-3' width={100} src={line} alt='/' />
      </div>
      <div className="relative pb-14">
        <div className=' sm:w-[800px] w-60 mx-auto rounded-2xl h-[250px] bg-white'>
          <div className=' absolute  mx-auto '>
            <hr className='  relative my-[10px] top-10  h-[3px] w-[90%] bg-gray-300  mx-auto' />

          </div>
          <div className='flex relative top-[72px] z-20 justify-around'>
            <div>
              <div className='rounded-xl w-[130px] h-[40px] animate-pop-up-slide1  bg-purple-500'>
                <h1 className='relative text-white mx-[15px] py-[8px]'>Anonymous</h1>
              </div>
              <div className='relative my-4 mx-auto rounded-full w-4 h-4 bg-purple-500'>

              </div>
            </div>
            <div className='pt-9' >

              <div className='relative my-4 mx-auto rounded-full w-4 h-4 bg-blue-400'>

              </div>
              <div className='rounded-xl w-[130px] h-[40px] animate-pop-up-slide2  bg-blue-400'>
                <h1 className='relative text-white mx-[15px] py-[8px]'>Anonymous1</h1>
              </div>
            </div>
            <div>
              <div className='rounded-xl w-[130px] h-[40px] animate-pop-up-slide3  bg-yellow-200'>
                <h1 className='relative text-white mx-[15px] py-[8px]'>Anonymous2</h1>
              </div>
              <div className='relative my-4 mx-auto rounded-full w-4 h-4 bg-yellow-200'>

              </div>
            </div>
            <div className='pt-9'>

              <div className='relative my-4 mx-auto rounded-full w-4 h-4 bg-green-300'>

              </div>
              <div className='rounded-xl w-[130px]  h-[40px] animate-pop-up-slide4  bg-green-300'>
                <h1 className='relative text-white mx-[15px] py-[8px]'>Anonymous3</h1>
              </div>
            </div>



          </div>
          <div>
            <hr className='  relative my-[10px]  h-[3px] w-[75%] bg-gray-300  mx-auto' />
          </div>
        </div>

      </div>
    </div>

  );

}

export default Wondered