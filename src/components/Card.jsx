import React from 'react'

const Card = ({imgUrl , name , text}) => {
  return (
    <div className='w-[345px] h-[333px] bg-white bg-opacity-10 rounded-[20px] flex flex-col justify-center items-center px-[1rem]'>
        <img src={imgUrl} alt="" />

        <h1 className='tracking-widest font-semibold text-[20px] text-white uppercase mt-2 mb-2'>{name}</h1>
        <p className='text-white text-center'>{text}</p>
        
        
    </div>
  )
}

export default Card