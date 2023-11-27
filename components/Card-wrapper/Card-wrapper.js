import React from 'react';
import Card from '../Card/Card';
import styles from '../Card-wrapper/Card-wrapper.module.css'
import image from '../../assets/no-image.jpg'

const CardWrapper = ({ characters, onDelete }) => {
  return (
    <div className={styles.CardWrapper}>
      {characters.map((character) => (
        <Card
          key={character.id}
          title={character.name}
          image={character.image || image.src} 
          paragraph={character.actor}
          onDelete={() => onDelete(character.id)
          }
          showId={()=>console.log(character.id)}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
