import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import styles from "./Card.module.css";

const Card = ({ id, title, image, onDelete, showId}) => {
   const handleButtonClick = () => {
    console.log("Button clicked for deletion!");
    onDelete(); 
  };

  return (
    <div className={styles.description}>
      <Link href={`/character/${id}`}>
      <h2>{title}</h2>
      <Image
            className={styles.image}
            alt="character photo"
            src={image}
            width={200}
            height={200}
          />
      </Link>
      <button onClick={handleButtonClick}>DELETE</button>
    </div>
  );
};

export default Card;
