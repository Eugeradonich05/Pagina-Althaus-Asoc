import React from 'react'
import styles from "./Home.module.css";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titlesContainer}>
        <p>Frase<b> motivacional</b></p>
        <br/>
        <p>Mini presentacion del estudio</p>
        <br/>
      </div>
    
    <div className={styles.ctaContainer}>
      <Link to = "Contact" smooth duration = {500}className={styles.callToAction}>
      Mas Informacion
      </Link>
      <Link to = "Contact" smooth duration = {500}className={styles.callToAction}>
      Contactanos
      </Link>
    </div>

    
    
    </div>
  )
}

export default Home