import React from 'react'
import {FaGithub,FaFacebook,FaLinkedin,FaInstagram} from 'react-icons/fa'

const Links = () => {
  return (
    <div className='hidden lg:flex side-links flex-col fixed top-[35%] left-0'>
        <ul>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-800'>
                <a className='flex justify-between items-center w-full text-gray-300 text-xl' href="#">LinkedIn <FaLinkedin size={22} /></a>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-950'>
                <a className='flex justify-between items-center w-full text-gray-300 text-xl' href="#">FaceBook <FaFacebook size={22} /></a>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-red-600'>
                <a className='flex justify-between items-center w-full text-gray-300 text-xl' href="#">Instagram <FaInstagram size={22} /></a>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-gray-900'>
                <a className='flex justify-between items-center w-full text-gray-300 text-xl' href="#">Github <FaGithub size={22} /></a>
            </li>
        </ul>
    </div>
  )
}

export default Links