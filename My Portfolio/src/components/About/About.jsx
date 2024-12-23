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
                        <p>Computer Engineering student with a strong foundation in technology and problem-solving. 
                            Eager to apply knowledge and skills to contribute to innovative projects and advance in the field. 
                            Adaptable, driven, and committed to continuous learning and growth.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("serverIcon.png")} alt="Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Languages</h3>
                        <p>Spanish: Native</p>
                        <p>English: Certificate B2</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursorIcon.png")} alt="Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Technical Skills</h3>
                        <p> Proficient in programming languages including Python, Java, JavaScript, R, C and C++.
                            Experienced with databases such as Oracle, MySQL, and SQLite. 
                            Skilled in frontend development using HTML, CSS, React, Node.js, jQuery, and JSON.</p>
                        
                    </div>
                </li>
            </ul>
          
        </div>
    </section>
  )
}

export default About
