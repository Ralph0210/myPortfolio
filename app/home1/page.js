"use client";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styles from "./page.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import './page.css'
import SplitType from "split-type";
import { useScroll } from "framer-motion";
import pl from '../../public/gallery/pl.png'
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const newRef = useRef(null)
  const nameRef = useRef(null)
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const imgRef = useRef(null)
  const tl = useRef()//store timeline in ref so it doesn't recreate when rerender

  // const { scrollYProgress, scrollY } = useScroll({
  //   container: newRef.current
  // })

  const { scrollYProgress, scrollY } = useScroll()

  useEffect(() => {
    console.log(scrollYProgress, scrollY)
  },[scrollY, scrollYProgress])

  const text = 'I am passionate about using technology for meaningful change. I create engaging, delightful, user-centric experiences that empower organizations committed to social responsibility and sustainability.'
  useEffect(() => {
    const myNameText = SplitType.create('#myName');
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    gsap.to(boxRef.current, {
      x: 1000,
      duration: 8,
      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 80%",
        // end:() => `+=${boxRef.current.offsetHeight}`,
        end: "top 30%",
        toggleActions:"restart none none none",
        //onEnter onLeave onEnterBack 
        //play/restart/reverse/pause/resume/reset/complete
        scrub: 5,
        //numeric value means how many seconds of smoothing
        pin: boxRef.current,
        pinSpacing: true,
        // markers: {
        //   startColor: "blue",
        //   endColor: "red",
        //   fontSize: "2rem",
        //   indent: 20
        // }
      },
    });})
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
      .timeline(
        {scrollTrigger:{
        trigger: boxRef.current,
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        toggleClass: {targets: boxRef.current, className:styles.boxActive},
        onUpdate: (self) => console.log(self.progress)
      }}
      )
      .to(boxRef.current, {rotate: 360, duration: 2})
      // .addLabel("scale")
      .to(boxRef.current, {scale: 2, duration: 2, ease:'elastic'})

      tl.current.play("scale")

    })
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(nameRef.current, {
        y: 0,
        duration: 2,
      })

    })

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.char', {
        opacity:1,
        stagger: 0.1,
        duration: 0.1,
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 80%",
          end: "top 30%",
          // markers:true,
          scrub: 1,
        }
      })

    }, nameRef.current)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y:200,
        delay:0,
        ease: "none",
        scrollTrigger:{
          trigger: newRef.current,
          start: "top 100%",
          end: "bottom 0%",
          scrub: 0,
          markers: true,
        }
      })

    })

    return () => ctx.revert()
  }, [])


  return (
    <>
    <div className={styles.div1}></div>
      
      {/* <div className={styles.div2}>
        // <div ref={boxRef} className={styles.box}></div>
        <div ref={boxRef2} className={styles.box2}></div>
      </div> */}
      {/* <div className={styles.panel1}></div> */}
      {/* <div ref={boxRef} className={styles.box}></div> */}
      {/* <div ref={nameRef} className="box">
      <p ref={nameRef} className='name' style={{fontSize:"2rem"}}>hello I am Ralph</p>
      {text.split(" ").map((char, index) => (
        <span className="char" key={index} >{char}</span>
      ))}
      </div>
      <div className={styles.panel2}></div> */}

      <div ref={newRef} className={styles.imageContainer}>
        <Image ref={imgRef} src={pl} alt="scf" style={{objectFit:"cover", width:"100%", height:"900px", transform: "translateY(-200px)"}}/>
      </div>
      <div className={styles.div1}></div>
    </>
  );
};

export default Page;
