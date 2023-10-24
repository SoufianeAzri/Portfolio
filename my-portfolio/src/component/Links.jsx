import React from 'react'
import {FaGithub,FaFacebook,FaLinkedin,FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='hidden lg:flex side-links flex-col fixed top-[35%] left-0'>
        <ul>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-800'>
                <Link className='flex justify-between items-center w-full text-gray-300 text-xl' to="https://www.linkedin.com/in/sofiane-azri-a1b43a221/">LinkedIn <FaLinkedin size={22} /></Link>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-950'>
                <Link className='flex justify-between items-center w-full text-gray-300 text-xl' to="https://www.facebook.com/soufiane.azz.14/">FaceBook <FaFacebook size={22} /></Link>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-red-600'>
                <Link className='flex justify-between items-center w-full text-gray-300 text-xl' to="#">Instagram <FaInstagram size={22} /></Link>
            </li>
            <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-gray-900'>
                <Link className='flex justify-between items-center w-full text-gray-300 text-xl' to="https://github.com/SoufianeAzri">Github <FaGithub size={22} /></Link>
            </li>
        </ul>
    </div>
  )
}

export default Links