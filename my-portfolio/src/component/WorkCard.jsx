import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3} from 'react-icons/fa';
import {DiReact} from "react-icons/di"
import {TbBrandNextjs,TbBrandTypescript,TbBrandJavascript} from "react-icons/tb"

const WorkCard = ({item}) => {
  return (
    <Link to={item.link}>
        <div className='shadow-lg shadow-[#040c16] rounded-md mx-auto h-[390px] p-4 relative'>
            <div style={{backgroundImage : `url("${item.image}")`}} className='w-full h-[63%] bg-cover rounded-md'>
                </div>
                <div className='py-2'>
                    <h1 className='font-bold text-[20px]'>{item.title}</h1>
                    <p className='font-semibold text-[14px]'>{item.descreption}</p>
                    <ul className='flex gap-2 pt-2 font-semibold text-[15px]'>
                        {
                            item.tags.map((tag)=>(
                            <li className={`${tag === "Next" ? 'text-[#757575]' : tag === "Html" ? "text-orange-600" : tag === "React" ? "text-sky-500" : tag === "Typescript" ? "text-blue-800" : tag === "Javascript" ? "text-yellow-500" : "text-blue-800"} p-0 flex gap-1 items-center`} key={tag}>{
                                tag === "Html" ? <AiOutlineHtml5 size={18} /> : tag === "Css" ? <FaCss3 size={18} /> : tag === "React" ? <DiReact size={18} /> : tag === "Next" ? <TbBrandNextjs size={18} /> : tag === "Typescript" ? <TbBrandTypescript size={18} /> : tag === "Javascript" ? <TbBrandJavascript size={18} /> : "#"
                            } {tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='absolute top-7 right-7 w-8 h-8 rounded-full bg-black flex justify-center items-center'>
                    <Link to={item.gitHubLink}>
                        <FaGithub size={20} />
                    </Link>
                </div>
                {/*<div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>React Application</span>
                    <div className='pt-8 text-center'>
                        <a href="">
                            <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                        </a>
                        <a href="">
                            <button className='text-center px-4 py-2 m-2 bg-white text-[#0a192f] rounded font-bold'>Demo</button>
                        </a>
                    </div>
                </div>*/}
            </div>
    </Link>
  )
}

export default WorkCard