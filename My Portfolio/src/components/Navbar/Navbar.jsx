import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <li className={styles.menuItem}><a href="#about">About</a></li>
            <li className={styles.menuItem}><a href="#studies">Studies</a></li>
            <li className={styles.menuItem}><a href="#certificates">Certifications</a></li>
            <li className={styles.menuItem}><a href="#experience">Experience</a></li>
            <li className={styles.menuItem}><a href="#projects">Projects</a></li>
            <li className={styles.menuItem}><a href="#contact">Contact</a></li>
            <li className={styles.menuItem}><a href="/CV ENGLISH MARÍA RODRÍGUEZ DÉNIZ.pdf">CV</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
