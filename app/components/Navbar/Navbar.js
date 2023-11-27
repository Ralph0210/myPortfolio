import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.homeLinkContainer}>
        <p>© Coded by Ralph</p>
      </div>
      <div className={styles.navContainer}>
        <nav>
          <ul>
            <li>
              <Link href='/work'>Work</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar