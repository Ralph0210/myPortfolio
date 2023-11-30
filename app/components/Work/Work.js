"use client";
import React, { useState } from "react";
import styles from "./Work.module.css";
import Image from "next/image";
import scf from "../../../public/gallery/scf.png";
import pl from "../../../public/gallery/pl.png";
import { useScroll } from "framer-motion";
import Link from "next/link";

const LargeWorkCard = ({
  title,
  tags,
  description,
  imageSrc,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hoveredAtAll
}) => {
  return (
    <div onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ opacity: hoveredAtAll !== null ? (isHovered ? 1 : 0.4) : 1, transition: "opacity 0.3s ease-in-out", height:"auto" }} >
      <Link href={`/work/${title.toLowerCase().replaceAll(" ", "-")}-2023`} className={styles.link}>
      <div
        className={`${styles.largeImageContainer} ${styles.workCard}`}
      >
        <Image
          draggable={false}
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const SmallWorkCard = ({
  title,
  tags,
  description,
  imageSrc,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hoveredAtAll
}) => {
  return (
    <div onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ opacity: hoveredAtAll !== null ? (isHovered ? 1 : 0.4) : 1, transition: "opacity 0.3s ease-in-out", height:"min-content" }} >
                    <Link href={`/work/${title.toLowerCase().replaceAll(" ", "-")}-2023`} className={styles.link}>
      <div
        className={`${styles.smallImageContainer} ${styles.workCard}`}
      >
        <Image
          draggable={false}
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const Work = ({ changeThemeRef2, footerStick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div ref={changeThemeRef2} className={styles.workContainer}>
      <p className={styles.selectedWork}>Selected Work</p>
      <div className={styles.workGallery}>
        <div className={styles.workGalleryTop}>
          <LargeWorkCard
            title="SCF Analysis Tool"
            tags={["UI/UX Design", "Full-Stack Development"]}
            description="I design and develop user centered digital products, ecommerce and brand communication solutions."
            imageSrc={scf}
            isHovered={hoveredCard === 0}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
          />
          <SmallWorkCard
            title="planet longhorn"
            tags={["UI/UX Design", "Full-Stack Development"]}
            description="I design and develop user centered digital products, ecommerce and brand communication solutions."
            imageSrc={pl}
            isHovered={hoveredCard === 1}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
          />
        </div>
        <div className={styles.workGalleryBottom}>
          <SmallWorkCard
            title="SCF Analysis Tool"
            tags={["UI/UX Design", "Full-Stack Development"]}
            description="I design and develop user centered digital products, ecommerce and brand communication solutions."
            imageSrc={pl}
            isHovered={hoveredCard === 2}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
          />
          <LargeWorkCard
            title="SCF Analysis Tool"
            tags={["UI/UX Design", "Full-Stack Development"]}
            description="I design and develop user centered digital products, ecommerce and brand communication solutions."
            imageSrc={scf}
            isHovered={hoveredCard === 3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
          />
        </div>
      </div>
      <Link ref={footerStick} href="/work" className={`${styles.moreWork} ${styles.button}`}>
        <span>More work</span> <div className={styles.bounds}></div>
      </Link>
    </div>
  );
};

export default Work;
