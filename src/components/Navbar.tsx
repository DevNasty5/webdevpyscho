import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center z-10 fixed bottom-5'>
      <div className='w-[45%] rounded-full h-[70px] bg-black '>
        <ul className='flex justify-evenly items-center h-full'>
          <a href='#pricing'>
          <li className='text-white px-4 cursor-pointer '>Benefits</li>
            </a>
          <li className='text-white px-4 cursor-pointer '>Recent Work</li>
          <li className='text-white px-4 cursor-pointer '>Pricing</li>
          <li className='text-white px-4 cursor-pointer '>FAQs</li>
          <li className='text-white px-4 cursor-pointer '>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
