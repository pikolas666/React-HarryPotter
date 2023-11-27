import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import styles from './Paragraph.module.css';

const Paragraph = ({ paragraph, onParagraphDelete }) => {
    const { id, title, isCompleted } = paragraph;
  
    return (
        <div className={styles.pWrapper}>
      <div className={`${styles.paragraph} ${isCompleted ? styles.completed : styles.notCompleted}`}>
        <div className={styles.paragraphText}>{title}</div>
      
      </div>
        <button onClick={() => onParagraphDelete(id)} className={styles.deleteButton}>
            X
      </button>
      </div>
    );
  };

const Paragraphs = () => {
  const [inputText, setInputText] = useState('');

  const [paragraphs, setParagraphs] = useState([{ id: uuidv4(), title: 'dfdfdf', isCompleted: false }]);

  useEffect(() => {
    const storedParagraphs = localStorage.getItem('paragraphs');
    setParagraphs(JSON.parse(storedParagraphs) || []);
  }, []);

  const onAddParagraph = () => {
    const newParagraph = {
      id: uuidv4(),
      title: inputText,
      isCompleted: false,
    };

    const newParagraphs = [...paragraphs, newParagraph];
    setParagraphs(newParagraphs);
    localStorage.setItem('paragraphs', JSON.stringify(newParagraphs));
    setInputText('');
  };

  const onParagraphDelete = (id) => {
    const filteredParagraphs = paragraphs.filter((paragraph) => paragraph.id !== id);
    setParagraphs(filteredParagraphs);
    localStorage.setItem('paragraphs', JSON.stringify(filteredParagraphs));
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        placeholder="paragraph"
        className={styles.input}
      />
      <button onClick={onAddParagraph} className={styles.button}>
        Add paragraph
      </button>
      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph) => (
          <div key={paragraph.id}>
            <Paragraph paragraph={paragraph} onParagraphDelete={onParagraphDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paragraphs;
