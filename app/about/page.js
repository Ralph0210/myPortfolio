'use client'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Cursor from '../utils/Cursor'
import Footer from '../components/Footer/Footer'

const page = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Footer isInView4={true}/>
    </div>
  )
}

export default page