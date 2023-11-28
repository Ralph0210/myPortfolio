"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./Intro.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work from "../Work/Work";

gsap.registerPlugin(ScrollTrigger);

const galleryTop = [
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/pl.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/pl.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/pl.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/pl.png" },
];

const abilityCard = [
  { title: "Web Design", description:"I design and develop user centered digital products, ecommerce and brand communication solutions.", tools:["Figma", "Photoshop"]},
  { title: "Web Development", description:"I design and develop user centered digital products, ecommerce and brand communication solutions.", tools:["Figma", "Photoshop"]},
  { title: "Branding", description:"I design and develop user centered digital products, ecommerce and brand communication solutions.", tools:["Figma", "Photoshop"]},
]

const Intro = ({ ThemeDark, changeThemeRef, changeThemeRef3}) => {

  const galleryRef = useRef()
  const galleryTopRef = useRef()
  const galleryBottomRef = useRef()
  // const aboutMeTextRef = useRef()
  const abilityDeckRef = useRef()
  // State to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0)

  // Effect to update the scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // Calculate the translateY based on the scroll position
  const translateX = `translateX(${scrollPosition / 10 - 200}px)`;
  const translateMinusX = `translateX(${(scrollPosition / 10 + 200)* -1}px)`;

  //scroll animation

  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to([galleryTopRef.current, changeThemeRef.current], {
          opacity:0,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "bottom 80%",
            end: "bottom top",
            pin:true,
            pinSpacing:false,
            // markers:true,
            scrub:4,
          }
        })
      })

      return () => ctx.revert()
  },[])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(abilityDeckRef.current, {
        x:-150,
        scrollTrigger: {
          trigger: changeThemeRef3.current,
          start: "top top",
          end: "bottom top",
          pin:true,
          pinSpacing:true,
          // markers:true,
          scrub:4,
        }
      })
    })

    return () => ctx.revert()
},[])




  return (
    <div className={styles.introContainer}>
      <div ref={galleryRef} className={styles.gallery}>
        <div ref={galleryTopRef} className={styles.galleryTop} style={{ transform: translateX }}>
          {galleryTop.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.galleryItem}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <Image
                  src={item.imageURL}
                  alt="gallery"
                  width={345}
                  height={246}
                  className={styles.galleryImage}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.themeChangeCircle} style={ThemeDark ? {width:"500rem", height:"500rem"} : {}}></div>
        <div ref={changeThemeRef} className={styles.galleryBottom} style={{ transform: translateMinusX}}>
          {galleryTop.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.galleryItem}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <Image
                  src={item.imageURL}
                  alt="gallery"
                  width={345}
                  height={246}
                  className={styles.galleryImage}
                />
              </div>
            );
          })}
        </div>
      </div>

          <div ref={changeThemeRef3} className={styles.aboutMeContainer}>
            <p className={styles.hello}>HELLO THERE</p>
            <p className={styles.aboutMeText}>I am passionate about using technology for meaningful change. I create engaging, delightful, user-centric experiences that empower organizations committed to social responsibility and sustainability.</p>

            <div ref={abilityDeckRef} className={styles.abilityDeckContainer}>
              {abilityCard.map((item, index) => {
                return (
                  <div key={index} className={`${styles.abilityCard} ${styles.view}`}>
                    <p className={styles.abilityTitle}>{item.title}</p>
                    <p className={styles.abilityDescription}>{item.description}</p>
                    {/* <p className={styles.abilityTools}>Tools: {item.tools.join(", ")}</p> */}
                  </div>
                );
              })}
            <div className={styles.abilityCard}>about me</div>
          </div>
          </div>
              {/* <Work /> */}
    </div>
  );
};

export default Intro;
