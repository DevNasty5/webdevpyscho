import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center z-10 fixed bottom-16 '>
      <div className='w-[45%] rounded-full h-[70px] bg-black hidden md:block'>
        <ul className='flex justify-evenly items-center h-full'>
          <li className='text-white px-2 py-4 cursor-pointer transition duration-300 hover:bg-white hover:px-2 hover:py-4 hover:text-black hover:rounded-full'>
            <a href='#pricing'>Benefits</a>
          </li>
          <li className='text-white px-2 py-4  cursor-pointer rounded-2xl transition duration-300 hover:bg-white hover:px-2 hover:py-4 hover:text-black '>
            <a href='#Rw'>Recent Work</a>
          </li>
          <li className='text-white px-2 py-4  cursor-pointer transition duration-300 hover:bg-white hover:px-2 hover:py-4 hover:text-black hover:rounded-full'>
            <a href='#pricing'>Pricing</a>
          </li>
          <li className='text-white px-2 py-4  cursor-pointer transition duration-300 hover:bg-white hover:px-2 hover:py-4 hover:text-black hover:rounded-full'>
            <a href='#Faq'>FAQs</a>
          </li>
          <li className='text-white px-2 py-4  cursor-pointer transition duration-300 hover:bg-white hover:px-2 hover:py-4 hover:text-black hover:rounded-full'>
            <a href='#ContactUs'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
