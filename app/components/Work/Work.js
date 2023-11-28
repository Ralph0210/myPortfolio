import React from 'react'
import styles from './Work.module.css'

const Work = ({changeThemeRef2}) => {
  return (
    <div ref={changeThemeRef2} className={styles.workContainer}>Work</div>
  )
}

export default Work