"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import hero from "../../../public/heroImages/hero.webp";
import styles from "./Hero.module.css";
import { Icon } from "@iconify/react";
import SplitType from "split-type";
import gsap from "gsap";

const Hero = ({ ThemeDark }) => {
  // const heroImages = [hero, hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const myNameRef = useRef();

  useEffect(() => {
    const myNameText = SplitType.create("#myName");
  }, []);

  useLayoutEffect(() => {
    const myNameElement = myNameRef.current;

    // Check if the myNameElement exists before proceeding
    if (myNameElement) {
      const lineElements = myNameElement.querySelectorAll(".char");
      // console.log("Selected elements:", lineElements);
      // console.log("Number of elements:", lineElements.length);

      let ctx = gsap.context(() => {
        gsap.to(lineElements, {
          y: 0,
          x: 200,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        });
      }, myNameRef.current);

      return () => ctx.revert();
    }
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  //   }, currentImageIndex === 0 ? 3000 : 150);

  //   return () => clearInterval(intervalId);
  // }, [currentImageIndex]);

  // State to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

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
  const translateY = `translateY(${scrollPosition / 4 + 40}px)`;

  return (
    <>
      <div className={styles.c}>
        <div className={styles.d}>
          <div className={styles.a}>
            <Image
              placeholder="blur"
              draggable={false}
              src={hero}
              alt="hero"
              style={{ height: "auto", width: "100%", transform: translateY }}
              className={styles.b}
            />
          </div>
          <ul className={ThemeDark ? styles.inView : ""}>
            <li ref={myNameRef} id="myName">
              Ralph Chang
            </li>
            <li>Designer & Developer</li>
          </ul>
        </div>
        <div className={styles.heroArrow}>
          <Icon
            className={ThemeDark ? styles.inView : ""}
            icon="ph:arrow-up-light"
            style={{ fontSize: "2.4rem", transform: "rotate(210deg)" }}
            aria-label="Scroll down"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
