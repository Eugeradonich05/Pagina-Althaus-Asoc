import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Your Logo</h2>
          <p>Your tagline here</p>
          <h3>About Us</h3>
          <p>We want to help bring talented students and unique startups together.</p>
          <h3>Contact Us</h3>
          <p>📞 +91 999 999 9999</p>
          <p>📧 your@email.com</p>
        </div>
        
        <div className={styles.section}>
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Events</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Helpful Links</h3>
          <ul>
            <li>Services</li>
            <li>Supports</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Subscribe More Info</h3>
          <input type="email" placeholder="Enter your Email" className={styles.inputField} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© 2019 Company Ltd. All rights reserved.</p>
        <div className={styles.icons}>
          <span>🔵</span> <span>🟠</span> <span>🟡</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;