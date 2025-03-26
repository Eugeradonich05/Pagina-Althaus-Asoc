import React from 'react'
import styles from "./Services.module.css"
const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>Services legales</p>
      <img className = {styles.servicioimagen} src={require("../imagenes/01f94c2ce5d9e89001337bfa146eb12f.jpg")}/>
    </div>
  )
}

export default Services