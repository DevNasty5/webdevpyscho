'use client';
import React, { useState } from "react";
import "./style2.css";

// interface PricingProps {
//   onContactSalesClick?: (packageType: string) => void;
// }

const Pricing: React.FC<{ onContactSalesClick: (packageType: string) => void }> = (props) => {
  const [packageType, setPackageType] = useState('');

  const handleContactSalesClick = (packageType: string) => {
    // Set the selected packageType in local state
    setPackageType(packageType);

    // Invoke the onContactSalesClick prop with the selected packageType
    if (props.onContactSalesClick) {
      props.onContactSalesClick(packageType);
    }
    // Assuming "ContactUs" is an element with an id
    const contactUsElement = document.getElementById('ContactUs');

    if (contactUsElement) {
      // Scroll to the "ContactUs" section
      contactUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    // Assuming "ContactUs" is an element with an id
    const contactUsElement = document.getElementById('ContactUs');

    if (contactUsElement) {
      // Scroll to the "ContactUs" section
      contactUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="pricing"
      className="bg-[#E1EAF4]  items-center justify-center  overflow-x-hidden md:pb-28 pb-8"
    >
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto md:mb-24 mb-6 max-w-2xl text-center lg:max-w-5xl">
            <h1 className="md:mb-2 mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Membership Level
            </h1>
            <p className="text-lg text-gray-500">We got what suits you best!</p>
          </div>
          <div className="mx-auto max-w-6xl flex flex-col">
            <div className="flex flex-wrap items-center">
              <div className="w-full  lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                  <span className="mb-2 block text-sm font-semibold text-gray-1200">
                    Starter Package
                  </span>
                  <span className="flex items-end">
                    <a
                      href="#CS"
                      className="relative inline-block px-8 py-3 font-medium group"
                      onClick={() => handleContactSalesClick("Starter Package")}
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                      <span className="relative text-black text-xl group-hover:text-white">
                        Contact Sales
                      </span>
                    </a>
                    {/* <span className="text-4xl font-extrabold leading-none">
                      ₹50,000
                    </span>

                    <span className="text-sm font-semibold">/month</span> */}
                  </span>

                  {/* <span className=" block text-sm mt-2 text-gray-500">
                    billed ₹5 Lakhs for 12 months (exc VAT)
                  </span> */}

                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm  text-black">
                          Upto 3 Pauses
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Single request at a time
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Enhanced Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Ad-Free Experience
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Custom Design Styles
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Resource Repository Access
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Personalized Analytics Platform
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Real-time Chat Support
                        </span>
                      </li>
                    </ul>
                    {/* <div className="flex space-x-12">
                      <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                        <span className="relative text-black group-hover:text-white">
                          Get Started
                        </span>
                      </a>
                      <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                        <span className="relative text-black group-hover:text-white">
                          Book a call
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-[#111827] px-10 pb-16 ">
                  {/* <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                    <div className="flex-shrink-0 rounded-full bg-[#111827] px-5 py-4 text-sm font-semibold uppercase text-white">
                      Most Popular
                    </div>
                  </div> */}
                  {/* <span className="flex items-end text-white">
                    <span className="text-4xl font-extrabold leading-none">
                      Pay per use
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span> */}
                  <div className="pt-14 border-t border-orange-500 ">
                  <span className="mb-2 block text-sm font-semibold text-gray-100">
                    Have something else in mind?
                  </span>
                    <div className="flex flex-col space-y-10">
                      {/* <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group text-center"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-[#111827] border-2 border-white group-hover:bg-white"></span>
                        <span className="relative text-white group-hover:text-black text-center">
                          Refer a friend & earn
                        </span>
                      </a> */}
                      
                      <a
                        href="#CS"
                        className="relative inline-block px-4 py-3 font-medium group text-center"
                        onClick={handleBookCall}
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-[#111827] border-2 border-white group-hover:bg-white"></span>
                        
                        <span className="relative text-white text-xl group-hover:text-black text-center">
                          Book a call
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center justify-center h-[26rem] bg-[#111827] flex-col mr-2 pt-14">
                      <div>
                        <span className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3658C1] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                         
                          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                            What else?
                          </span>
                        </span>
                      </div>
                      <span className="flex items-end text-white mt-4">
                        <span className="text-4xl mt-3 justify-center text-center font-extrabold leading-none">
                          Web Solutions
                        </span>
                      </span>
                      <span className="text-white mt-5 text-center">
                        Get free SEO optimization and website optimization for 2
                        duration.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3 ">
                <div className=" rounded-md mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-1200">
                    Founder Package
                  </span>
                  <span className="flex items-end">
                    <a
                      href="#CS"
                      className="relative inline-block px-8 py-3 font-medium group"
                      onClick={() => handleContactSalesClick("Founder Package")}
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                      <span className="relative text-black text-xl group-hover:text-white">
                        Contact Sales
                      </span>
                    </a>
                    {/* <span className="text-4xl font-extrabold leading-none">
                      ₹1,50,000
                    </span>
                    <span className="text-sm font-semibold">/month</span> */}
                  </span>
                  {/* <span className=" block text-sm mt-2 text-gray-500">
                    billed ₹15 Lakhs for 12 months (exc VAT)
                  </span> */}

                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm font-semibold text-black">
                          Unlimited Number of Pause
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Upto 5 requests at a time
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Enhanced Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Ad-Free Experience
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Custom Design Styles
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Resource Repository Access
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Personalized Analytics Platform
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-black">
                          Real-time Chat Support
                        </span>
                      </li>
                    </ul>
                    {/* <div className="flex space-x-12">
                      <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                        <span className="relative text-black group-hover:text-white">
                          Get Started
                        </span>
                      </a>
                      <a
                        href="#_"
                        className="relative inline-block px-4 py-2 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#111827] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#111827] group-hover:bg-[#111827]"></span>
                        <span className="relative text-black group-hover:text-white">
                          Book a call
                        </span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
