import React, {useState, useEffect} from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import meIcon from '../../../public/heroIcon.png'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const email = 'ralphchang@utexas.edu'
const number = '+1 512 466 9511'

const Footer = ({isInView4}) => {
  const [time, setTime] = useState()
  const [isctaHovered, setIsctaHovered] = useState(false);
  useEffect(() => {
    const updateTime = () => {
      const formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(formattedTime);
    };
  
    // Update the time initially
    updateTime();
  
    // Update the time every minute (if desired)
    const intervalId = setInterval(updateTime, 60000); // Update every 60 seconds
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    // <div >
    <div className={styles.footerContainer} style={isInView4 ? {position:"sticky", bottom:"0"} : {}}>
      <div className={styles.footercta} onMouseEnter={() => setIsctaHovered(true)} onMouseLeave={() => setIsctaHovered(false)}>
        <Image src={meIcon} alt="me" width={96} height={96} style={{zIndex:10}}/>
        <p className={styles.cta} style={isctaHovered ? {marginRight:"5rem"} : {}}>Let&apos;s work together</p>
        <Link href='/contact' className={styles.arrowContainer}>
        <Icon
            className={styles.arrow}
            icon="ph:arrow-up-light"
            aria-label="Scroll down"
          />
          <div className={styles.bounds}></div>
          </Link>
      </div>
      <p className={styles.sayHi}>Or just say Hi!</p>
      <div className={styles.contacts}>
        <button className={styles.contactsCard} onClick={() =>  navigator.clipboard.writeText(email)}>{email}</button>
        <button className={styles.contactsCard} onClick={() =>  navigator.clipboard.writeText(number)}>{number}</button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerBottom}>
        <div>
          <span>VERSION</span>
          <p>2023 © Edition</p>
        </div>
        <div>
          <span>RALPH&apos;S TIME</span>
          <p>{time}</p>
        </div>
        <div className={styles.socials}>
          <span>SOCIALS</span>
          <div style={{display:"flex", gap:"1rem", flexDirection:'row'}}>
          <Link href="https://www.linkedin.com/in/ralph-chang-5a49811a3/" target='_blank'>LinkedIn<div className={styles.bounds}></div></Link>
          <Link href="https://www.instagram.com/ralph_cyh/" target='_blank'>Instagram<div className={styles.bounds}></div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer