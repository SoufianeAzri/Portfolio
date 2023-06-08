import React from 'react'
import { SKILL } from '../SKILLS'
import Skill from './skill-content'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='flex justify-center max-w-[1000px] h-full w-full flex-col p-4 mx-auto'>
            <div className='md:text-center'><h1 className='text-4xl font-bold border-b-4 inline border-pink-600'>Skills</h1></div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
                {SKILL.map((skill,key)=>(<Skill data={skill} key={key}/>))}
            </div>
        </div>
    </div>
  )
}

export default Skills