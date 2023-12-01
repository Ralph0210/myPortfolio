import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./SideNav.css";
import { gsap } from "gsap";

const SideNav = ({ sideNavOpened, setSideNavOpened }) => {
  const el = useRef();
  const tl = useRef();
  const overlay = useRef();
  const inner = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(el.current, { width: "100%", duration: 0.1 })
        .to(inner.current, {
          duration:0.3,
          width: "40%"
        })
        .to(overlay.current, {
          opacity:0.4,
          duration:0.5,
          ease: "power1.out"
        }, "<")
        ;
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    sideNavOpened ? tl.current.play() : tl.current.reverse();
  }, [sideNavOpened]);

  return (
    <div
      className="sideNavContainer"
      ref={el}
      // style={sideNavOpened ? { width: "100%" } : { width: "0%" }}
    >
      <div className="sideNavWrapper" ref={overlay} onClick={() => setSideNavOpened(!sideNavOpened)}></div>
      <div className="innerContainer" ref={inner}></div>
      
    </div>
  );
};

export default SideNav;
