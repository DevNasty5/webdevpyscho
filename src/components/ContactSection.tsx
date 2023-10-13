import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row p-6 md:p-10 bg-grey-500">
      <div className="w-full md:w-1/2 bg-gray-800 p-6 mb-4 md:mb-0 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Small Team with Large Impact</h2>
          <div className="text-xl text-gray-200">
            <p className="mb-4">
            We are <span className="font-bold">"Best"</span> at what we do.
            </p>
            <p className="mt-4">
            We thrive on challenges, consistently delivering results that leave a lasting mark.
            </p>
          </div>
        </div>


      <div className="w-full md:w-1/2 bg-gray-950 p-6">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 bg-gray-800 text-white p-2 rounded"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full md:w-1/2 bg-gray-800 text-white p-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full bg-gray-800 text-white p-2 rounded"
          />
          <textarea
            placeholder="Please Share any information that will help us prepare for our meeting"
            className="w-full h-24 bg-gray-900 text-white p-2 rounded"
          ></textarea>
          <button className="bg-purple-500 text-white px-4 py-2 rounded w-full">Book Free Consult</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;