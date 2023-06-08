import React from 'react'
import Working from '../assets/projects/workImg.jpeg';
import realState from '../assets/projects/realestate.jpg';

export const Work = () => {
  return (
    <div name='work' className='pb-8 w-full text-gray-300  bg-[#0a192f]'>
        <div className='w-full flex flex-col p-4 mx-auto max-w-[1000px] justify-center h-full'>
            <div>
                <p className='text-4xl border-b-8 font-bold inline border-pink-600'>Work</p>
                <p className='py-6'>//Check my recently works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-4'>
                <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realState})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div><div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div><div style={{backgroundImage: `url(${realState})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center h-full content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
