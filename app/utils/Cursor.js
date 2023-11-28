'use client'
import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from '../components/Intro/Intro.module.css'

const Cursor = () => {

    const [cursortext, setCursorText] = useState('')
    let scale = 1

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
                scale = 4
                gsap.to(cursor, {scale:scale})
                cursorText.style.display = 'block'
                setCursorText('click to flip')
            }
            else{
                scale = 4
                gsap.to(cursor, {scale: scale})
                setCursorText('')
            }
        }

        const onMouseLeaveLink = (e) => {
            scale = 1
            gsap.to(cursor, {scale:scale})
            cursorText.style.display = 'none'
        }

        const onClick = () => {
            gsap.to(cursor, { scale: scale * 0.8, duration: 0.1, onComplete: () => gsap.to(cursor, { scale: scale, duration: 0.1 }) });
          };


          document.addEventListener('click', onClick);

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
        <span className='cursor-text'>{cursortext}</span>
    </div>
  )
}

export default Cursor

