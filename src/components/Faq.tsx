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
      question: "Why wouldn't I just hire a full-time developer?",
      answer: "Good question! For starters, the annual cost of a full-time senior-level developer now exceeds ₹1,00,00,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize, with the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
    },
    {
      question: "What makes our developer hiring service unique?",
      answer: "Our service allows you to hire a developer for a minimum period of one month. The cool part is that you can also pause and resume developer services as needed within this time frame, providing flexibility that adapts to your business's ever-changing demands.",
    },
    {
      question: "How do I resume developer services after pausing them?",
      answer:" Resuming developer services is just as simple as pausing them. Get in touch with our support team, and we will restart your developer services promptly, ensuring a seamless transition.",
    },
    {
      question: "Who are the developers?",
      answer:"Our developers are a experienced team consisting of top-talent only, skilled in various technologies and programming languages, making them the perfect choice for turning your digital vision into reality.",
    },
    {
      question: "How fast will I receive my requests?",
      answer:" On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    },
    {
      question: " Are there any additional costs for pausing and resuming developer services?",
      answer:" No, there are no additional fees for pausing or resuming developer services. You only pay for the services you use during the one-month commitment.",
    },
    {
      question: "What if I have an urgent project and need to hire a developer immediately?",
      answer:"If you have an urgent project, you can still hire a developer and take advantage of our one-month commitment. We understand that time-sensitive projects arise, and our flexible approach accommodates such scenarios.",
    },
    {
      question: " Can I change or upgrade my developer service plan during the one-month commitment?",
      answer:"Absolutely, you can change or upgrade your developer service plan at any time within the one-month commitment. We're here to accommodate your evolving needs.",
    },
    {
      question: " What if I encounter issues with the developer's performance?",
      answer:"If you face any issues with the developer's performance, please get in touch with our support team. We are committed to resolving any concerns promptly to ensure your satisfaction.",
    },
   
  ];

  return (
    <div>
      <section id='Faq' className="relative mx-auto max-w-7xl px-2 py-14 md:px-0">
        <Image src={js} alt='js' className='absolute -top-40 -left-12 hidden md:block'>

        </Image>
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              FAQs
            </h2>
            {/* <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p> */}
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
                    className={`question md:w-[60vw] text-start flex text-lg font-semibold text-black ${
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
          Can&apos;t find what you&apos;re looking for?{' '}

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
