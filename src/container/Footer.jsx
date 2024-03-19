import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row md:flex-wrap sm:flex-col justify-between items-center mt-8 pb-[5rem]'>

      <h2 className='text-white text-[20px] font-bold uppercase'>krypto</h2>

      <div>
        <h1 className='mb-4'> </h1>

        <p className='text-white'>Home</p>
        <p className='text-white'>About</p>
        <p className='text-white'>Buy NFTs</p>
        <p className='text-white'>Sell NFTs</p>
      </div>

      <div>
        <h1 className='mb-4 text-white font-bold'>Market </h1>

        <p className='text-white'>Home</p>
        <p className='text-white'>About</p>
        <p className='text-white'>Buy NFTs</p>
        <p className='text-white'>Sell NFTs</p>
      </div>

      <div>
        <h1 className='mb-4 text-white font-bold'>Contact </h1>

        <p className='text-white'>Home</p>
        <p className='text-white'>About</p>
        <p className='text-white'>Buy NFTs</p>
        <p className='text-white'>Sell NFTs</p>
      </div>

      <div>
        <h1 className='mb-4 text-white font-bold'>Join our newsletter </h1>

        <div className='flex justify-center items-center mt-8'>
          <input type="email" placeholder='Email Address' className='w-[345px] h-[53px] bg-indigo-950 rounded-[70px] px-8  text-white outline-none' />
          <button className='bg-indigo-400 rounded-[83px] w-[124px] ml-[-4rem] h-[53px] uppercase font-semibold text-white'>submit</button>
        </div>

      </div>


    </div>
  )
}

export default Footer