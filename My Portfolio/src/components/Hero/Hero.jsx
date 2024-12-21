import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm María Rodríguez</h1>
            <p className={styles.description}>I am a computer engineering student.  Motivated and passionate about continuous learning and self improvement, with a strong drive to acquire new skills and
 contribute to team success. 
 Hardworking, ambitious, creative, and enthusiastic.</p>

            <a href="mailto:rodriguezdenizmaria@gmail.com" className={styles.contact}>Contact Me!</a>
        </div>
        <img src={getImageUrl("IMG_8473_jpg.JPG")} alt="Image of me" className={styles.image}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
      
  )
}

export default Hero
