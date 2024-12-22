import React, { useState } from "react";
import styles from "./Certificates.module.css";
import { getImageUrl } from '../../utils'

const Certificates = () => {
  const certificates = [
    { src: getImageUrl("redhat2.jpg"), alt: "Certificate 1" },
    { src: getImageUrl("redhat1.jpg"), alt: "Certificate 2" },
    { src: getImageUrl("googleCert.jpg"), alt: "Certificate 3" },
    { src: getImageUrl("deep.jpg"), alt: "Certificate 4" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.arrow}>
          &#8249;
        </button>
        <img
          src={certificates[currentIndex].src}
          alt={certificates[currentIndex].alt}
          className={styles.image}
        />
        <button onClick={handleNext} className={styles.arrow}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Certificates;
