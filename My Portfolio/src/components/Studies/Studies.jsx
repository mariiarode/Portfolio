import React from 'react'
import styles from "./studies.module.css"
import { getImageUrl } from '../../utils'

const studies = () => {
  return (
    <section className={styles.container} id="studies">
        <h4 className={styles.title}>STUDIES</h4>
            
            <div className={styles.content}>
                <ul className={styles.studiesItems}>
                    <li className={styles.studiesItem}>
                        <h6 className={styles.title3}>High School</h6>
                        <li className={styles.studiescomp}>
                            <img src={getImageUrl("images.jpeg")} alt="logo" className={styles.image}/>
                            <div className={styles.paragraph}>
                                <p className={styles.info}>Salesianos Sagrado Corazón de Jesús</p>
                                <p className={styles.info}>2015-2021</p>
                            </div>
                        </li>
                        
                    </li>
                    <li className={styles.studiesItem}>
                        <h6 className={styles.title3}>Computer Engineering</h6>
                        <li className={styles.studiescomp}>
                            <img src={getImageUrl("ULPGC.svg.png")} alt="logo" className={styles.image}/>
                            <div className={styles.paragraph}>
                                <p className={styles.info}>Universidad de las Palmas de Gran Canaria</p>
                                <p className={styles.info}>2021-Present</p>
                            </div>
                            
                        </li>
                        <li className={styles.studiescomp}>
                            <img src={getImageUrl("Logo_SYGNET.png")} alt="logo" className={styles.image}/>
                            <div className={styles.paragraph}>
                                <p className={styles.info}>Politechnika Krakowska</p>
                                <p className={styles.info}>ERASMUS. Krákow, Poland</p>
                                <p className={styles.info}>2023-2024</p>
                            </div>
                            
                        </li>
                    </li>
                
                </ul>
            </div>
    </section>
  )
}

export default studies
