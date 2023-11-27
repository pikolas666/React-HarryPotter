import React from 'react';
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ title, image, paragraph, onDelete, showId }) => {
  const handleButtonClick = () => {
    console.log("Button clicked for deletion!");
    onDelete(); 
  };
  const logId = () => {
    showId()
  };
 

  return (
    <div onClick={logId} className={styles.description}>
      <h2>{title}</h2>
      <Image
            className={styles.image}
            alt="character photo"
            src={image}
            width={200}
            height={200}
          />
      {/* <img className={styles.image} src={image} alt={title} /> */}
    
      <span className={styles.spanDescription}>{paragraph}</span>
      <button onClick={handleButtonClick}>DELETE</button>
    </div>
  );
};

export default Card;
