import React from 'react'
import './index.scss'
import Story from '../../Components/AboutStory'
import Sales from '../../Components/AboutSales'
import Staff from '../../Components/AboutStaff'
import Delivery from '../../Components/AboutDelivery'

function About() {
  return (
    <section id='about'>
      <Story/>
      <Sales/>
      <Staff/>
      <Delivery/> 
      
    </section>
  )
}

export default About