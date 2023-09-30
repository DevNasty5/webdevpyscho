import React from 'react';

const Text2 = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around sm:w-full w-[80vw] p-6 sm:p-10 mt-[2%] mb-16'>
        <div className='w-full sm:w-[20%]'>
          <h2 className='text-3xl font-bold text-center mb-5'>Be the best you with EQ</h2>
        </div>
        <div className='w-full sm:w-[22%] text-base text-gray-700 font-medium mb-5'>
          <p className='text-lg'>
            People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className='w-full sm:w-[22%] text-gray-700 font-medium'>
          <p className='text-lg'>
            They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more per year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text2;
