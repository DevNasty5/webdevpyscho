import React from 'react'
import Image from 'next/image'
import ghost from '../assets/ghost.png'

const Work = () => {
    return (
        <div className=' bg-purple-100 overflow-hidden block sm:w-full w-[80vw] h-[730px] py-12   pl-16 rounded-lg shadow  '>
            <div className=' flex justify-between  around text-4xl font-bold py-7 pb-7'>
                <h1 className='relative'>Work with us</h1>
                <h1 className='relative px-24 font-semibold py-1 text-blue-600 text-center text-5xl'>ahead</h1>
            </div>
            <div className='flex justify-between'>
                <div  >

                    <div className='w-[500px] h-[450px] bg-white rounded-xl'>
                        <Image className='w-14 h-14 mx-6 pt-5' src={ghost} width={100}  alt=''/>
                        <div className='py-3 mx-6 text-xl font-semibold'>About</div>
                        <div className='mb-[-20px] leading-6 text-gray-500 text-[14px] max-w-[85%] mx-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint nulla dicta ut ex, omnis nisi delectus, labore iste sed aliquid quasi culpa inventore dolorem nemo quibusdam soluta dignissimos doloribus.!</div>

                        <div className='w-[100%] h-[200px] relative top-[105px] bg-orange-50 rounded-xl'>
                        <div className='pt-6 mx-6 text-xl font-semibold'>Product</div>
                        <div className=' leading-6 text-gray-500 text-[14px] max-w-[85%] mx-6'>Lorem ipsum dolor sit, amet eestiae sint nulla si delectus, labore iste sed aliquid quasi culpa inventore dolorem nemo quibusdam soluta dignissimos doloribus.!</div>

                        </div>
                    </div>
                </div>
                <div className='relative h-[550px] overflow-y-scroll right-14 '>
                    <div className=' flex flex-col  gap-4  px-20'>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        <div className='h-[180px] w-[330px] bg-white rounded-xl'>
                            <div className='max-w-[85%] my-[25px] mx-auto'>
                            <div className='text-normal font-semibold my-3'>Power through, even when the going gets through</div>
                            <div className=' text-sm text-gray-400'>We help you spot and work around whatever stands in the was, be it bas habits,fears,etc.</div>
                            </div>
                        </div>
                        


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Work