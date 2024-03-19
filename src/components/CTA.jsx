import React from 'react'

const CTA = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='mt-8 w-[1100px] py-8 bg-gradient-to-l from-emerald-200 to-indigo-700 rounded-[30px] flex flex-col justify-center items-center'>
        <h3 className='"w-[358px] h-[47px] text-center text-black text-xl font-semibold uppercase leading-7 tracking-widest'>Are your ready?</h3>
        <h1 className='w-[526px] h-[134px] text-center text-white text-[57px] font-bold capitalize leading-[57px]'>be a part of the next big thing</h1>
        <button className='mt-4 text-white font-semibold bg-black rounded-[83px] px-[22px] py-[20px] w-[290px] uppercase text-[20px]'>get started</button>
      </div>
    </div>
  )
}

export default CTA