import React from 'react'
import { useNavigate } from 'react-router-dom';

const Skill = (props) => {
    const {id,image,text,reference} = props.data;
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/${id}`)} className='shadow-md shadow-[#040c16] flex items-center justify-center flex-col h-60 hover:scale-110 duration-500'>
        <div className='h-[50%] flex items-center'>
          <img className='w-20 mx-auto' src={image} alt="HTML icon" />
        </div>
        <div className='h-[50%] flex flex-col items-center'>
          <p className='my-4 font-bold text-[20px]'>{text}</p>
          <p className='italic'>({reference})</p>
        </div>
    </div>
  )
}

export default Skill;