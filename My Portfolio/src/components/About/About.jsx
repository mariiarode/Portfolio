import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("uiIcon.png")} alt="Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Profile</h3>
                        <p>I'm a computer engineering student who graduates next year.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("serverIcon.png")} alt="Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Soft Skills</h3>
                        <p>Proactivity
                            Assertive communication
                            Dedication
                            Problem solving
                            Time management
                        Teamwork</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursorIcon.png")} alt="Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Technical Skills</h3>
                        <p> Programming Languages
                            Python, Java, JavaScript, R, C
                            Databases
                            Oracle, mySQL, SQLite
                            Frontend
                            HTML, CSS, Node.js, jQuery, JSON</p>
                    </div>
                </li>
            </ul>
          
        </div>
    </section>
  )
}

export default About
