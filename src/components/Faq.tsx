'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import js from "../assets/js.svg"

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpansion = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: 'How do I get started?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'What is the difference between a free and paid account?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
   
  ];

  return (
    <div>
      <section id='Faq' className="relative mx-auto max-w-7xl px-2 py-14 md:px-0">
        <Image src={js} alt='js' className='absolute -top-40 -left-12'>

        </Image>
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              FAQs
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq-item cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleExpansion(index)}
                >
                  <div
                    className={`question w-[60vw] flex text-lg font-semibold text-black ${
                      expandedItems.includes(index) ? 'expanded' : ''
                    }`}
                  >
                    {item.question}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-8 w-8 text-gray-800 transition-transform ${
                        expandedItems.includes(index) ? 'rotate-180' : ''
                      }`}
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                  
                </button>
                {expandedItems.includes(index) && (
                  <div className="answer px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-gray-600">
            Can't find what you're looking for?{' '}
            <a href="#" title="" className="font-semibold text-black hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
