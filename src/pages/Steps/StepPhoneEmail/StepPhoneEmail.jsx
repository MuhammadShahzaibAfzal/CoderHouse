import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onClick }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];
  function onNext() {
    console.log("next");
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrapper}>
            <button onClick={() => setType("phone")} className={`${styles.tabButton} ${type=='phone' ?  styles.active : ''}`}><img src="./images/phone-white.png" alt="phone"/> </button>
            <button onClick={() => setType("email")} className={`${styles.tabButton} ${type==='email' && styles.active}`}><img src="./images/mail-white.png" alt="email"/></button>
          </div>
          <Component onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
