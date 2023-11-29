'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Navbar from './components/Navbar/Navbar';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { Parallax } from 'react-parallax';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import { useInView } from 'framer-motion';
import Cursor from './utils/Cursor';

export default function Home() {
  
  const arrowRef = useRef();
  const changeThemeRef = useRef(null)
  const isInView = useInView(changeThemeRef)
  const changeThemeRef2 = useRef(null)
  const isInView2 = useInView(changeThemeRef2)
  const changeThemeRef3 = useRef(null)
  const isInView3 = useInView(changeThemeRef3)
  const [ThemeDark, setThemeDark] = useState(false)

  useEffect(() => {
    if (isInView || isInView2 || isInView3 === true) {
      setThemeDark(true)
    }else{
      setThemeDark(false)
    }
  }, [isInView, isInView2])

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
      <Hero ThemeDark={ThemeDark}/>
      <Intro ThemeDark={ThemeDark} changeThemeRef={changeThemeRef} changeThemeRef3={changeThemeRef3}/>
      <Work changeThemeRef2={changeThemeRef2} />
      <Footer />
    </main>
  )
}