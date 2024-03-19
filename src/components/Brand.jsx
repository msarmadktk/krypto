import React from 'react'

import { companies } from '../constants';
import brand1 from '../assets/brand1.svg'
import brand2 from '../assets/brand2.svg'
import brand3 from '../assets/brand3.svg'
import brand4 from '../assets/brand4.svg'

import { brands } from '../constants';

const Brand = () => {
  return (
    <div className='flex flex-col justify-center items-start px-14'>
      <h1 className='text-white uppercase font-semibold tracking-widest'>Featured On</h1>

      <div className='mt-4 flex flex-row justify-around items-center w-full bg-indigo-700 bg-opacity-20 rounded-[7px]'>
       
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
           
      </div>

    </div>
  )
}

export default Brand