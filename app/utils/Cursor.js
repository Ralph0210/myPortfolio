'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styles from '../components/Intro/Intro.module.css'

const Cursor = () => {

    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor')
        const links = document.querySelectorAll(`.${styles.abilityCard}`)
        const cursorText = document.querySelector('.cursor-text')

        console.log(links)

        const onMouseMove = (e) => {
            const { clientX, clientY } = e
            gsap.to(cursor, {x:clientX, y:clientY, duration:0.3})
        }

        const onMouseEnterLink = (e) => {
            const link = e.target
            if(link.classList.contains(styles.view)){
                console.log(true)
                gsap.to(cursor, {scale:4})
                cursorText.style.display = 'block'
            }else{
                console.log(false)
                gsap.to(cursor, {scale:4})
            }
        }

        const onMouseLeaveLink = (e) => {
            gsap.to(cursor, {scale:1})
            cursorText.style.display = 'none'
        }


        document.addEventListener('mousemove', onMouseMove)

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach((link) => {
              link.removeEventListener('mouseenter', onMouseEnterLink);
              link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
          };

    },[])


  return (
    <div id='custom-cursor' className='custom-cursor'>
        <span className='cursor-text'>view tools</span>
    </div>
  )
}

export default Cursor