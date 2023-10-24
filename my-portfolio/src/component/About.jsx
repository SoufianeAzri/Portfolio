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
                    <p>I'm a 21-year-old with a Bachelor's degree in Computer Science, and I'm passionate about web development.</p>
                </div>
                <div>
                    <p>With a strong foundation in front-end technologies like HTML, CSS, JavaScript, React, and Next.js, I love creating user-friendly and visually appealing websites. What sets me apart is my knack for problem-solving, a skill honed through my academic journey. I've also gained practical experience and teamwork skills during my involvement in the university club, Debug Club. I'm a self-learner and I'm always eager to expand my knowledge. Through my journey, I aim to not only build great websites but also contribute to solving real-world problems through technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About