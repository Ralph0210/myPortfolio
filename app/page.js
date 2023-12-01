"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { Parallax } from "react-parallax";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import { useInView } from "framer-motion";
import Cursor from "./utils/Cursor";
import Lenis from '@studio-freight/lenis'
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

export default function Home() {
  const [sideNavOpened, setSideNavOpened] = useState(false);

 const scroll = useRef()
  const arrowRef = useRef();
  const changeThemeRef = useRef(null);
  const isInView = useInView(changeThemeRef);
  const changeThemeRef2 = useRef(null);
  const isInView2 = useInView(changeThemeRef2);
  const changeThemeRef3 = useRef(null);
  const isInView3 = useInView(changeThemeRef3);
  const [ThemeDark, setThemeDark] = useState(false);

  const footerStick = useRef(null);
  const isInView4 = useInView(footerStick);

  useEffect(() => {
    const lenis = new Lenis({duration: 1.5, wheelMultiplier:1.1})

    lenis.on('scroll', e => {
      // console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    sideNavOpened ? lenis.stop() : lenis.start()

    return () => {
      lenis.destroy()
    }
  },[sideNavOpened])

  // useEffect(() => {
  //   let scroll
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default();
  //   });

  //  // cleanup phase
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // });

  useEffect(() => {
    if (isInView || isInView2 || isInView3 === true) {
      setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  }, [isInView, isInView2, isInView3]);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     scroll.current = new LocomotiveScroll();
  //   })();

  //   return () => {
  //     if (scroll.current) scroll.current.destroy();
  //   };
  // }, []);

  // useEffect(() => {
  //   sideNavOpened ? scroll.current.stop() : null
  // }, [sideNavOpened]);

  return (
    <main
    data-scroll-container
      // style={sideNavOpened ? { overflow: "hidden", pointerEvents: "none" } : {}}
      className={styles.main}
    >

      <Cursor sideNavOpened={sideNavOpened} />
      {/* <div className={styles.heroContainer}> */}
      <Navbar
        ThemeDark={ThemeDark}
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <Hero ThemeDark={ThemeDark} />
      <Intro
        ThemeDark={ThemeDark}
        changeThemeRef={changeThemeRef}
        changeThemeRef3={changeThemeRef3}
      />
      <Work changeThemeRef2={changeThemeRef2} footerStick={footerStick} />
      <Footer isInView4={isInView4} />

    </main>
  );
}
