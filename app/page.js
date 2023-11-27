'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Navbar from './components/Navbar/Navbar';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { Parallax } from 'react-parallax';
import Hero from './components/Hero/Hero';

export default function Home() {
  const arrowRef = useRef();

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = ((await import('locomotive-scroll')).default)
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      {/* <div className={styles.heroContainer}> */}
      <Navbar />
      <Hero />
      <div style={{height:'500rem', backgroundColor:"black"}}></div>
    </main>
  )
}