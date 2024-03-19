
import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import './App.css'

import { Hero, Analytics, Application, Footer, Testimonials } from './container';
import { Brand, CTA, Navbar } from './components';


const App = () => {
  return (
    <div className='px-[4rem] bg-[#000235]'>
        <Navbar />
      {/* <div className='gradient-01 absolute g1:w-[75%] sm:left-[-10rem] top-[-20rem] z-0'/> */}
        <Hero />
      {/* <div className="w-[679px] absolute h-[479px] bg-emerald-200 bg-opacity-80 rounded-full blur-[250px] z-0 right-[-20em] top-[20rem]" /> */}

      <Brand />
      <Analytics />
      <Application />
      {/* <div className="w-[679px] absolute h-[479px] bg-emerald-200 bg-opacity-80 rounded-full blur-[250px] z-0 left-[-20em] top-[80rem]" /> */}
      <Testimonials />
      <CTA />
      <Footer />
      {/* <div className="w-[679px] absolute h-[479px] bg-indigo-400  rounded-full blur-[250px] z-0 right-[-20em] top-[140rem]" /> */}
    </div>
  )
}

export default App