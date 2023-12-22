import React from 'react'
import Arrival from '../../Components/Arrival'
import BestSelling from '../../Components/BestSelling'
import Browse from '../../Components/Browse'
import Enhance from '../../Components/Enhance'
import Explore from '../../Components/Explore'
import FlashSales from '../../Components/FlashSales'
import Header from '../../Components/Header'
import CustomerService from '../../Components/CustomerService'

function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <Browse />
      <BestSelling />
      <Enhance />
      <Explore />
      <Arrival />
      <CustomerService />
    </>
  )
}

export default Home