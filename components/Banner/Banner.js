import React from 'react';
import styles from './Banner.module.css'
import Paragraphs from '../Paragraphs/Pragraph';

const Banner = () => {
    return (
        <aside className={styles.banner}>
            <h2>Did You Know?</h2>
         
            <Paragraphs />
        </aside>
    );
}

export default Banner;
