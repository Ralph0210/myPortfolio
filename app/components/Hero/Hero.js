'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import hero from '../../../public/heroImages/hero.webp'
import hero1 from '../../../public/heroImages/hero1.webp'
import hero2 from '../../../public/heroImages/hero2.webp'
import hero3 from '../../../public/heroImages/hero3.webp'
import hero4 from '../../../public/heroImages/hero4.webp'
import hero5 from '../../../public/heroImages/hero5.webp'
import hero6 from '../../../public/heroImages/hero6.webp'
import styles from './Hero.module.css'
import { Icon } from '@iconify/react';

const Hero = () => {
    const heroImages = [hero, hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, currentImageIndex === 0 ? 3000 : 300);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

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
    const translateY = `translateY(${scrollPosition / 4+40}px)`;

  return (
    <>
    <div className={styles.c}>
      <div className={styles.d}>
      <div className={styles.a}>
      <Image src={heroImages[currentImageIndex]} alt="hero" style={{height:"auto", width:"100%", transform: translateY}} className={styles.b}/>
      </div>
      <ul>
          <li>Ralph Chang</li>
          <li>Designer & Developer</li>
        </ul>
        </div>
        <div className={styles.heroArrow}>
        <Icon icon="ph:arrow-up-light" style={{fontSize:"2.4rem", transform:"rotate(210deg)"}}aria-label="Scroll down" />
        </div>
    </div>
    
    </>
  )
}

export default Hero