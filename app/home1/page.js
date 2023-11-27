'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import hero from '../../public/heroImages/heroMain.png'
import styles from './page.module.css'

const page = () => {

    // State to track the scroll position
    const [scrollPosition, setScrollPosition] = useState(0);

    // Effect to update the scroll position on scroll
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Calculate the translateY based on the scroll position
    const translateY = `translateY(${scrollPosition / 4 - 100}px)`;

  return (
    <div className={styles.c}>
      <div className={styles.a}>
      <Image src={hero} alt="hero" style={{height:"60vh", width:"auto", transform: translateY }} className={styles.b}/>
      </div>
      <div style={{height:'500rem', backgroundColor:"white"}}></div>
    </div>
  )
}

export default page