import React from 'react'
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <div className='mt-8 flex flex-row md:flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-[75px] text-white font-bold max-w-[463px] leading-[89px]  no-scrollbar'>Discover And Collect Rare NFTs</h1>
        <p className=' mt-4 text-[18px] text-white max-w-[463px]'>The most secure marketplace for buyingand selling unique crypto assets.</p>
        <div className='mt-8 flex flex-row sm:flex-col  justify-between w-full items-center'>
          <button className="w-[210px] h-[73px] sm:mb-4 bg-indigo-400 rounded-[83px] uppercase text-white font-semibold" >Buy NFTS </button>
          <button className='w-[210px] h-[73px] rounded-[83px] border border-emerald-200 uppercase text-white font-semibold'>Sell Nfts</button>
        </div>
      </div>

      <div className='flex flex-row md:flex-col justify-center items-center gap-8'>
        <img src={hero} className='w-[511px] ' alt="" />

      </div>
    </div>
  )
}

export default Hero