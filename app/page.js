'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Navbar from './components/Navbar/Navbar';
import Image from 'next/image';
import heroImageMain from '../public/heroImages/heroMain.png'
import hero1 from '../public/heroImages/animation_1-min.png'
import hero2 from '../public/heroImages/animation_2-min.png'
import hero3 from '../public/heroImages/animation_3-min.png'
import hero4 from '../public/heroImages/animation_4-min.png'
import hero5 from '../public/heroImages/animation_5-min.png'
import hero6 from '../public/heroImages/animation_6-min.png'
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { Parallax } from 'react-parallax';
import Hero from './components/Hero/Hero';

export default function Home() {
  const heroImages = [heroImageMain, hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const arrowRef = useRef();

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = ((await import('locomotive-scroll')).default)
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, currentImageIndex === 0 ? 3000 : 300);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <main className={styles.main}>
      {/* <div className={styles.heroContainer}> */}
      <Navbar />
      <Hero />
      <div style={{height:'500rem', backgroundColor:"black"}}></div>
    </main>
  )
}