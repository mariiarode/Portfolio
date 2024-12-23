import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Get in touch!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:rodriguezdenizmaria@email.com">rodriguezdenizmaria@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mar%C3%ADa-rodr%C3%ADguez-d%C3%A9niz-03246932a/">linkedin.com/MaríaRodríguezDéniz</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/mariiarode">github.com/mariiarode</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact
