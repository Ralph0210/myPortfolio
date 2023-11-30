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
      <div style={{height:"100vh", backgroundColor:"white", zIndex:5, position:'relative', borderRadius:"5rem"}}></div>
      <Footer isInView4={true}/>
    </div>
  )
}

export default page