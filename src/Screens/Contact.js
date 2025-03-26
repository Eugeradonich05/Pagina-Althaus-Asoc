import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.container}>
      <div className={styles.contactform}>
        <div className={styles.formsection}>
          <h2>Contact Us</h2>
          <p>
            Feel free to contact us any time. We will get back to you as soon as we can!
          </p>
          <input type="text" placeholder="Name" className={styles.inputfield} />
          <input type="email" placeholder="Email" className={styles.inputfield} />
          <textarea placeholder="Message" className={styles.textareafield}></textarea>
          <button className={styles.submitbutton}>Send</button>
        </div>
        <div className={styles.infosection}>
          <h3>Info</h3>
          <p>info@getintouch.we</p>
          <p>+24 56 89 146</p>
          <p>14 Greenroad St.</p>
          <p>09:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;