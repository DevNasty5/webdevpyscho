import React from 'react'
import Image from 'next/image'
import logoo from '../assets/logoo.svg'
import mail from '../assets/icons8-mail-48.png'
import location from '../assets/icons8-location-50.png'


const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <Image className=' w-16 mx-auto' height={100}  width={100} src={logoo} alt='' />
                    <h1 className='mx-auto font-semibold py-1 text-blue-600 text-center text-3xl'>ahead</h1>

                </div>
                <div className='flex gap-16 pt-8'>
                    <div className='flex gap-3'> <div className='w-10 rounded-full h-10 bg-green-400'>
                        <Image className='w-[25px] mx-auto my-2' height={100} width={100} src={location} alt='' />
                    </div>
                        <h1 className='my-auto'>AuguststraBe 26, 10117 Berlin</h1>
                    </div>
                    <div className='flex gap-3'> <div className='w-10 rounded-full h-10 bg-green-400'>
                        <Image className='w-[25px] mx-auto my-2' height={100}  width={100} src={mail} alt='' />

                    </div>
                        <h1 className='my-auto'>hi@ahead-app.com</h1>
                    </div>
                </div>
                <div className='mx-auto text-center'>
                <button type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 mt-10 text-white bg-[#050708] hover:bg-[#000000] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#000000] mr-2 mb-2">
                        <svg className="w-6 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                        <h1 className='font-light text-xs'>Downlod on the <br /> <span className=' font-medium text-xl'> App Store</span>
                        </h1>
                    </button>
                </div>
                <div className='my-8 text-center'>
                    <h1 className='mx-auto text-sm  text-gray-500'>© 2022 Ahead app. All rights Reserved</h1>
                </div>
            </div>

        </div>
    )
}

export default Footer