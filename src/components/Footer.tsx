import React from 'react'
import Image from 'next/image'
import Logo from '../assets/header.svg'
export function Footer() {
  return (
    <section className='bg-[#000000]'>
      <div className='flex justify-center items-center p-20'>
        <div className='flex flex-col justify-center items-center md:w-1/2'>
          <h1 className='text-white md:text-4xl text-2xl text-center font-thin '>See if DevDynasty is right for you.<br className='hidden md:block'></br>(It Totally Is!)</h1>
          <p className='text-white my-4 text-center'>
            Get a guided tour through DevDynasty, and find out how you and <br className='md:block hidden'></br>your team can change the way you solve your business digital needs forever.
          </p>
          <button className='bg-[#000000] border-[white] rounded-2xl border-[1px] flex justify-center items-center md:py-8 mt-5 md:px-36 py-6 px-32 text-white hover:-translate-y-2 hover:shadow-4xl duration-300'>Get Started</button>
        </div>
      </div>


      <div className="relative overflow-hidden bg-white py-8 pt-6">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <Image src={Logo} alt='logo' className='h-8 w-8' />
                  <span className="ml-4 text-lg font-bold">DevDynasty</span>
                </div>
              </a>
            </div>
            {/* <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div> */}
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a target='_blank' href="https://www.linkedin.com/company/devdynastytech/">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                      </svg>
                    </div>
                  </a>
                </div>
                {/* <div className="w-auto p-1.5">
                  <a target='_blank' href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Footer