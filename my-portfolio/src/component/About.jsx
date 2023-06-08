import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex justify-center items-center flex-col'>
            <div className='grid grid-cols-2 max-w-[1000px] w-full gap-8'>
                <div className='sm:text-right pl-4 pb-8'>
                    <h1 className='text-4xl inline border-b-4 border-pink-600'>About</h1>
                </div>
                <div></div>
            </div>
            <div className='grid sm:grid-cols-2 max-w-[1000px] w-full gap-8 py-2 px-4 items-center'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, optio quasi laudantium recusandae enim at molestias omnis natus dolorem sapiente voluptas rerum facere quidem eveniet quod aliquid eos eum magnam?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About