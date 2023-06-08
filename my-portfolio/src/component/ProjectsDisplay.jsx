import React from 'react'
import { useParams } from 'react-router-dom'
import { SKILL } from '../SKILLS';

const ProjectsDisplay = () => {
    const {id} = useParams();
    const project = SKILL[id];
  return (
    <div className='h-screen w-full bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center mx-auto px-4 h-full'>
        <h1 className='py-4 text-4xl text-gray-300 font-bold'>{project.text}</h1>
        <img className='w-[250px]' src={project.image} />
        </div>
    </div>
  )
}

export default ProjectsDisplay