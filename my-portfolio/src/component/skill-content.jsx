import React from 'react'
import { useNavigate } from 'react-router-dom';

const Skill = (props) => {
    const {id,image,text} = props.data;
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/${id}`)} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={image} alt="HTML icon" />
        <p className='my-4'>{text}</p>
    </div>
  )
}

export default Skill;