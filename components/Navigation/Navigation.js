import React from 'react';
import {useState} from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'; 

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
        console.log('hit')
      setShowNav(!showNav);
      console.log(showNav)

    };
  
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.burgerIcon} onClick={toggleNav}>
                &#9776; 
            </div>
            <div className={styles.nav}>
        
                <nav>
                <Link href="/">Home</Link>
                <a href="#">Books</a>
                <a href="#">Movies</a>
                <Link href="/characters">Characters</Link>
                <a href="#">Spells</a>
                
                </nav>
            
            </div>
           
        </div>
         <div className={showNav ? styles.show : styles.dontShow}>
         <a href="#">Home</a>
         <a href="#">Books</a>
         <a href="#">Movies</a>
         <a href="#">Characters</a>
         <a href="#">Spells</a>
         
     </div>
     </>
    );
  };
  
  export default Navigation;