"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import styles from './Cursor.module.css'
import stylesIntro from "../components/Intro/Intro.module.css";
import styles2 from "../components/Work/Work.module.css";
import stylesNav from "../components/Navbar/Navbar.module.css";
import stylesFooter from "../components/Footer/Footer.module.css";
import { Icon } from "@iconify/react";

const Cursor = ({ sideNavOpened }) => {
  
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredAboutMeCard, setIsHoveredAboutMeCard] = useState(false);
  const [isHoveredNavButton, setIsHoveredNavButton] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [isHoveredWork, setIsHoveredWork] = useState(false);
  const [isHoveredArrow, setIsHoveredArrow] = useState(false);
  const [isHoveredContactsCard, setIsHoveredContactsCard] = useState(false);
  const [isCopied, setIsCopied] = useState(false)
  const [cursortext, setCursorText] = useState();
  let scale = 1;

  useLayoutEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cards = document.querySelectorAll(`.${stylesIntro.abilityCard}`);
    const aboutMeCard = document.querySelector(`.${stylesIntro.aboutMeCard}`);
    const works = document.querySelectorAll(`.${styles2.workCard}`);
    const buttons = document.querySelectorAll(`.${styles2.bounds}`);
    const navButtons = document.querySelectorAll(`.${stylesNav.bounds}`);
    const footerButtons = document.querySelectorAll(`.${stylesFooter.bounds}`);
    const footerContactsCard = document.querySelectorAll(`.${stylesFooter.contactsCard}`)
    const cursorText = document.querySelector(".cursor-text");

    const cursorSize = 20;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      //   gsap.to(cursor, {x:clientX, y:clientY})

      if (
        (isHoveredButton && e.target.classList.contains(styles2.bounds)) ||
        (isHoveredNavButton && e.target.classList.contains(stylesNav.bounds)) ||
        (isHoveredArrow && e.target.classList.contains(stylesFooter.bounds))
      ) {
        const button = e.target;

        // console.log(button.classList);
        const rect = button.getBoundingClientRect();
        const left = rect.left;
        const top = rect.top;
        const buttonWidth = rect.width;
        const buttonHeight = rect.height;
        const center = { x: left + buttonWidth / 2, y: top + buttonHeight / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };
        gsap.to(cursor, {
          width: buttonWidth / 3,
          height: buttonHeight / 3,
          borderRadius: "5rem",
          x: center.x - buttonWidth / 6 + distance.x * 0.1,
          y: center.y - buttonHeight / 6 + distance.y * 0.1,
        });
      } else if (isHoveredCard) {
        const card = e.target;
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        });
        cursorText.style.display = "block";
        setCursorText("click to flip");
      } else if (isHoveredAboutMeCard) {
        const card = e.target;
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        });
        cursorText.style.display = "block";
        setCursorText(<Icon
            className={styles.arrow}
            icon="ph:arrow-up-light"
            aria-label="Scroll down"
          />);
      } else if (isHoveredWork) {
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText("view case");
      } else if (isHoveredContactsCard && !isCopied) {
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText("click to copy");
      }else if (isHoveredContactsCard && isCopied) {
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText("copied");
      }else {
        gsap.to(cursor, {
          scale: 1,
          width: 20,
          height: 20,
          borderRadius: "50%",
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
          mixBlendMode:"difference",
        });
        cursorText.style.display = "none";
        setCursorText('')
      }
    };

    const onMouseEnterWorks = (e) => {
      setIsHoveredWork(true);
    };

    const onMouseLeaveWorks = (e) => {
      setIsHoveredWork(false);
    };

    const onMouseEnterCard = (e) => {
      setIsHoveredCard(true);
    };

    const onMouseLeaveCard = (e) => {
      setIsHoveredCard(false);
    };

    const onMouseEnterButton = (e) => {
      setIsHoveredButton(true);
    };

    const onMouseLeaveButton = (e) => {
      setIsHoveredButton(false);
    };

    const onMouseEnterNavButton = (e) => {
      setIsHoveredNavButton(true);
    };

    const onMouseLeaveNavButton = (e) => {
      setIsHoveredNavButton(false);
    };

    const onMouseEnterArrow = (e) => {
        setIsHoveredArrow(true);
    }

    const onMouseLeaveArrow = (e) => {
        setIsHoveredArrow(false);
    }

    const onMouseEnterContactsCard = (e) => {
        setIsHoveredContactsCard(true);
    }

    const onMouseLeaveContactsCard = (e) => {
        setIsHoveredContactsCard(false);
        setIsCopied(false)
    }

    const onMouseEnterAboutMeCard = (e) => {
        setIsHoveredAboutMeCard(true);
    }

    const onMouseLeaveAboutMeCard = (e) => {
        setIsHoveredAboutMeCard(false);
    }

    const onClick = () => {
      gsap.to(cursor, {
        scale: scale * 0.8,
        duration: 0.1,
        onComplete: () => gsap.to(cursor, { scale: scale, duration: 0.1 }),
      });

      if (isHoveredContactsCard){
        setCursorText("copied");
        setIsCopied(true)
      }
    };

    document.addEventListener("click", onClick);

    cards.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterCard);
      link.addEventListener("mouseleave", onMouseLeaveCard);
    });

    works.forEach((work) => {
      work.addEventListener("mouseenter", onMouseEnterWorks);
      work.addEventListener("mouseleave", onMouseLeaveWorks);
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterButton);
      button.addEventListener("mouseleave", onMouseLeaveButton);
    });

    navButtons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterNavButton);
      button.addEventListener("mouseleave", onMouseLeaveNavButton);
    });

    footerButtons.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterArrow);
      button.addEventListener("mouseleave", onMouseLeaveArrow);
    })

    footerContactsCard.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterContactsCard);
      button.addEventListener("mouseleave", onMouseLeaveContactsCard);
    })

    if(aboutMeCard){
        aboutMeCard.addEventListener("mouseenter", onMouseEnterAboutMeCard);
      aboutMeCard.addEventListener("mouseleave", onMouseLeaveAboutMeCard);
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => {
        // router.events.off('routeChangeStart', handleRouteChange);
      document.removeEventListener("click", onClick);
      works.forEach((work) => {
        work.removeEventListener("mouseenter", onMouseEnterWorks);
        work.removeEventListener("mouseleave", onMouseLeaveWorks);
      });
      document.removeEventListener("mousemove", onMouseMove);
      cards.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterCard);
        link.removeEventListener("mouseleave", onMouseLeaveCard);
      });
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterButton);
        button.removeEventListener("mouseleave", onMouseLeaveButton);
      });

      navButtons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterNavButton);
        button.removeEventListener("mouseleave", onMouseLeaveNavButton);
      });
      footerButtons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterArrow);
      button.removeEventListener("mouseleave", onMouseLeaveArrow);
    })
    footerContactsCard.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterContactsCard);
      button.removeEventListener("mouseleave", onMouseLeaveContactsCard);
    })
  
    if(aboutMeCard){
        aboutMeCard.removeEventListener("mouseenter", onMouseEnterAboutMeCard);
        aboutMeCard.removeEventListener("mouseleave", onMouseLeaveAboutMeCard);}
    };
  }, [sideNavOpened, isHoveredButton,isHoveredAboutMeCard, isHoveredNavButton, isHoveredCard, isHoveredWork, isHoveredArrow, isHoveredContactsCard, isCopied]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">{cursortext}</span>
    </div>
  );
};

export default Cursor;
