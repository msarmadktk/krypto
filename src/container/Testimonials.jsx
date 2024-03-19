import React from 'react'
import Card from '../components/Card'

import people1  from '../assets/people1.svg'
import people2  from '../assets/people2.svg'
import people3  from '../assets/people3.svg'

const Testimonials = () => {
  return (
    <div className='mt-8 flex flex-row md:flex-col md:flex-wrap gap-8 justify-center items-center'>
      <Card imgUrl={people1} name={"olivia cole"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}/>
      <Card imgUrl={people2} name={"Even White"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}/>
      <Card imgUrl={people3} name={"John Miller"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "}/>
      
    </div>
  )
}

export default Testimonials