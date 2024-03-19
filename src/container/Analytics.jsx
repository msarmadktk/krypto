import React from 'react'

import analytics  from '../assets/analytics.svg'

const Analytics = () => {
  return (
    <div className='mt-8 flex flex-row md:flex-col justify-center items-center md:px-8 px-12'>
      <div className='flex flex-row justify-center items-center'>
          <img src={analytics} className='w-[485px]' alt="" />
      </div>

      <div className='flex flex-col justify-center items-start'>
         <h3 className='mb-4 max-w-[373px] text-emerald-200 text-xl font-semibold uppercase leading-7 tracking-widest'>analytics</h3>
         <h1 className='w-[518px] h-[136px] text-white text-[57px] font-bold  capitalize leading-[57px]'>built-in analytics to track your nfts</h1>
         <p className='w-[373px] text-white text-lg font-normal leading-7'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
         <button className='bg-[#8D8DDA] text-white uppercase font-semibold mt-4 w-[354px] px-[22px] py-[17px] rounded-[83px]' type='button'>view our pricing</button>
      </div>
    </div>
  )
}

export default Analytics