import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import About from './About'
import Skills from "./Skills";
import { Work } from "./work";
import Contact from "./Contact";
import Links from "./Links";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <>
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='flex justify-center max-w-[1000px] flex-col mx-auto lg:px-20 px-8 h-full'>
            <p className='text-pink-600 text-x'>Hello my name is ,</p>
            <h1 className='text-4xl text-gray-300 sm:text-6xl font-semibold'>Soufiane Azri</h1>
            <h2 className='text-4xl text-[#8892b0] sm:text-6xl font-semibold'>I'm front-end devoloper.</h2>
            <p className='text-xl text-[#8892b0] max-w-[600px] py-3'>I'm a passionate and responsible <span className='border-b border-pink-600 border-solid'>front-end devoloper,</span> with a 1.5 years of professional experience at Konceppt team, along with 1 year of freelancing. Skilled in devloping highly responsive websites with elegant and efficient code</p>
            <div>
              <Link to='work' smooth={true} duration={500}><button className=' text-white group flex items-center px-6 py-2 border-2 my-2 hover:bg-pink-400 hover:border-pink-600'>View Work <span className='group-hover:rotate-90 duration-300'><HiArrowRight className='ml-2'/></span></button>
              </Link>
            </div>
        </div>
    </div>
      <Links />
      <About />
      <Skills />
      <Work />
      <Contact />

    </>
  )
}

export default Home