import React, { useLayoutEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { gsap } from "gsap";

function Navbar() {
  useLayoutEffect(() => {});
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.homeLinkContainer}>
        <Link href="/">
          <p className={styles.copyright}>©</p>

          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>

            <p className={styles.ralph}>Ralph</p>

            <p className={styles.chang}>Chang</p>
          </div>
          <div className={styles.bounds}></div>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav>
          <ul>
            <li>
              <Link href="/work">
                <span>Work</span>
                <div className={styles.bounds}></div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>About</span>
                <div className={styles.bounds}></div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span>Contact</span>
                <div className={styles.bounds}></div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
