import React from 'react'
import { useState } from 'react';
import { menu } from '../constants'
import { SlMenu } from "react-icons/sl";
const Navbar = () => {

  const [toggle, setToggle] = useState(true);

  return (
    <div className='flex flex-row  justify-between items-center pt-[2rem] w-full '>
      <div>
        <h1 className='w-[87px] text-white text-xl font-bold uppercase leading-7 relative z-10 cursor-pointer'>KRYPTO</h1>
      </div>

      <div className='w-[60%] flex justify-around items-center nav:w-[25%] md:w-[30%] sm:w-[50%]'>
        <ul className='nav:hidden flex flex-row justify-around items-center w-[55%]'>
          {
            menu.map((object) => (
              <li className="text-white text-[17px] font-bold uppercase leading-7 z-10 cursor-pointer hover:text-indigo-200" >

                <a href={`#${object.text}`}>{object.text}</a>

              </li>
            ))
          }

        </ul>

        <div className="cursor-pointer w-[155px] h-12 px-[25px] py-2.5 bg-indigo-900 rounded-[60px] justify-center  no-scrollbar items-center gap-3.5 inline-flex">
          <div className="w-[17px] h-[17px] bg-indigo-400 rounded-full  no-scrollbar" />
          <div className="text-white font-semibold uppercase leading-7  no-scrollbar">buy nfts</div>
        </div>

        {/* <SlMenu className={` text-white font-[700] text-[24px]`} /> */}
      </div>

    </div>
  )
}

export default Navbar