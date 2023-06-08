import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className="logo">
            <img className='h-[60px]' src={Logo} alt="" />
        </div>
        <div className="links-content hidden md:flex">
            <ul className="links flex">
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='work' smooth={true} duration={500}>Works</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact us</Link></li>
            </ul>
        </div>
        <div onClick={()=>{setToggle(!toggle)}} className="md:hidden z-10">
            {!toggle ? <FaBars size={22} /> : <FaTimes size={22} />}
        </div>
        <div className={toggle ? "mobile-view absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex justify-center items-center": "hidden"}>
        <ul className="links">
                <li><Link onClick={()=>{setToggle(!toggle)}} to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link onClick={()=>{setToggle(!toggle)}} to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link onClick={()=>{setToggle(!toggle)}} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link onClick={()=>{setToggle(!toggle)}} to='work' smooth={true} duration={500}>Works</Link></li>
                <li><Link onClick={()=>{setToggle(!toggle)}} to='contact' smooth={true} duration={500}>Contact us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar